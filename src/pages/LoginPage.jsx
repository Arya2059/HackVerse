import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  Link as ChakraLink,
  InputGroup,
  InputRightElement,
  IconButton,
  extendTheme,
  ChakraProvider
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useRef } from "react";

// Custom Chakra UI theme with hacker colors
const theme = extendTheme({
  colors: {
    brandGreen: "#00FF00", // Green color
    brandBlack: "#000000" // Black color
  }
});

const testUserConfig = {
  username: 'adarshbalika',
  password: 'AdarshBalika123',
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector(store => store.auth.loading);
  const btn = useRef('');

  const [userConfig, setUserConfig] = useState({
    username: '',
    password: '',
  });

  const inputHandler = (e, inputName) => {
    setUserConfig(prev => ({
      ...prev,
      [inputName]: e.target.value
    }));
  };

  const formSubmitHandler = async e => {
    e.preventDefault();
    btn.current = 'login';
    await dispatch(loginUser(userConfig));
    navigate('/');
    setUserConfig({
      username: '',
      password: '',
    });
  };

  const guestLoginHandler = async e => {
    e.preventDefault();
    btn.current = 'guest';
    await dispatch(loginUser(testUserConfig));
    navigate('/');
    setUserConfig(testUserConfig);
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex
        minHeight="100vh"
        width="full"
        align="center"
        justifyContent="center"
      >
        <Box
          borderWidth={1}
          borderColor="brandGreen"
          px={4}
          width="90vw"
          maxWidth="500px"
          borderRadius={4}
          textAlign="center"
          boxShadow="lg"
        >
          <Box p={4}>
            <Flex justifyContent="center" position="relative">
              <Heading color="brandGreen">Log In</Heading>
            </Flex>
            <Box my={8} textAlign="left">
              <form onSubmit={formSubmitHandler}>
                <FormControl isRequired>
                  <FormLabel color="brandGreen">Username</FormLabel>
                  <Input
                    type="text"
                    value={userConfig.username}
                    placeholder="Enter your username"
                    onChange={(e) => inputHandler(e, "username")}
                    color="brandGreen"
                    _hover={{ borderColor: "brandGreen" }}
                    _focus={{
                      borderColor: "brandGreen",
                      boxShadow: `0 0 0 1px ${theme.colors.brandGreen}`
                    }}
                  />
                </FormControl>

                <FormControl mt={4} isRequired>
                  <FormLabel color="brandGreen">Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={userConfig.password}
                      placeholder="Enter your password"
                      onChange={(e) => inputHandler(e, "password")}
                      color="brandGreen"
                      _hover={{ borderColor: "brandGreen" }}
                      _focus={{
                        borderColor: "brandGreen",
                        boxShadow: `0 0 0 1px ${theme.colors.brandGreen}`
                      }}
                    />
                    <InputRightElement>
                      <IconButton
                        icon={
                          <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            color={theme.colors.brandGreen}
                          />
                        }
                        variant="ghost"
                        _hover={{ bg: "transparent" }}
                        onClick={() => setShowPassword((prev) => !prev)}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="brandGreen" // Using the custom brandGreen color
                  variant="outline" // Solid style for the hacker effect
                  width="full"
                  mt={4}
                  isLoading={loading && btn.current === "login"}
                  color="white" // Set text color to white
                  bg="brandGreen" // Set background color to brandGreen
                  border="2px solid" // Set border
                  borderColor="transparent" // Set border color to transparent initially
                  _hover={{
                    borderColor: "brandGreen", // Set border color on hover to brandGreen
                    color: "brandGreen", // Set text color on hover to brandGreen
                    bg: "transparent" // Set background color on hover to transparent
                  }}
                >
                  Log In! Let's Hack
                </Button>
                <Button
                  width="full"
                  mt={4}
                  isLoading={loading && btn.current === "guest"}
                  variant="outline" // Outline style for the hacker effect
                  color="white" // Set text color to white
                  bg="brandGreen" // Set background color to brandGreen
                  border="2px solid" // Set border
                  borderColor="transparent" // Set border color to transparent initially
                  _hover={{
                    borderColor: "brandGreen", // Set border color on hover to brandGreen
                    color: "brandGreen", // Set text color on hover to brandGreen
                    bg: "transparent" // Set background color on hover to transparent
                  }}
                  onClick={guestLoginHandler}
                >
                  Guest Log In
                </Button>

                <HStack justifyContent="center" mt={4}>
                  <Box>
                    <ChakraLink
                      as={Link}
                      to="/signup"
                      _hover={{ textDecoration: 'none' }}
                    >
                      <span style={{ color: theme.colors.brandGreen }}>
                        Create New Account
                      </span>
                    </ChakraLink>
                  </Box>
                </HStack>
              </form>
            </Box>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default LoginPage;
