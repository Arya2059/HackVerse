import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  Input,
  Button,
  HStack,
  Link as ChakraLink,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  extendTheme,
  ChakraProvider
} from "@chakra-ui/react";
import { signupUser } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TOAST_CONFIG } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const theme = extendTheme({
  colors: {
    brandGreen: "#00FF00",
    brandBlack: "#000000"
  }
});

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((store) => store.auth.token);
  const loading = useSelector((store) => store.auth.loading);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userConfig, setUserConfig] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const inputHandler = (e, inputName) => {
    setUserConfig((prev) => ({
      ...prev,
      [inputName]: e.target.value
    }));
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (userConfig.password === userConfig.confirmPassword) {
      dispatch(signupUser(userConfig));
    } else {
      toast.error("Passwords do not match", TOAST_CONFIG);
    }
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
              <Heading color="brandGreen">Sign Up</Heading>
            </Flex>
            <Box my={4} textAlign="left">
              <form onSubmit={formSubmitHandler}>
                <Flex
                  gap={{ base: 0, lg: 4 }}
                  flexDir={{ base: "column", lg: "row" }}
                >
                  <FormControl mt={4} isRequired>
                    <Input
                      type="text"
                      placeholder="Enter First Name"
                      value={userConfig.firstName}
                      onChange={(e) => inputHandler(e, "firstName")}
                      color="brandGreen"
                      _hover={{ borderColor: "brandGreen" }}
                      _focus={{
                        borderColor: "brandGreen",
                        boxShadow: `0 0 0 1px ${theme.colors.brandGreen}`
                      }}
                    />
                  </FormControl>
                  <FormControl mt={4} isRequired>
                    <Input
                      type="text"
                      placeholder="Enter Last Name"
                      value={userConfig.lastName}
                      onChange={(e) => inputHandler(e, "lastName")}
                      color="brandGreen"
                      _hover={{ borderColor: "brandGreen" }}
                      _focus={{
                        borderColor: "brandGreen",
                        boxShadow: `0 0 0 1px ${theme.colors.brandGreen}`
                      }}
                    />
                  </FormControl>
                </Flex>
                <FormControl mt={4} isRequired>
                  <Input
                    type="text"
                    placeholder="Enter Email"
                    value={userConfig.email}
                    onChange={(e) => inputHandler(e, "email")}
                    color="brandGreen"
                    _hover={{ borderColor: "brandGreen" }}
                    _focus={{
                      borderColor: "brandGreen",
                      boxShadow: `0 0 0 1px ${theme.colors.brandGreen}`
                    }}
                  />
                </FormControl>
                <FormControl mt={4} isRequired>
                  <Input
                    type="text"
                    placeholder="Enter username"
                    value={userConfig.username}
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
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      value={userConfig.password}
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
                            color={theme.colors.brandGreen} // Using the custom brandBlack color
                          />
                        }
                        variant="ghost"
                        _hover={{ bg: "transparent" }}
                        onClick={() => setShowPassword((prev) => !prev)}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl mt={4} isRequired>
                  <InputGroup>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      value={userConfig.confirmPassword}
                      onChange={(e) => inputHandler(e, "confirmPassword")}
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
                            icon={showConfirmPassword ? faEye : faEyeSlash}
                            color={theme.colors.brandGreen} // Using the custom brandBlack color
                          />
                        }
                        variant="ghost"
                        _hover={{ bg: "transparent" }}
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Button
                  type="submit"
                  isLoading={loading}
                  width="full"
                  mt={4}
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
                  Sign Up! Let's Connect
                </Button>

                <HStack justifyContent="center" mt={4}>
                  <Flex gap={2} alignItems="center">
                    Already have an account?
                    <ChakraLink as={Link} to="/login">
                      <Text fontWeight="bold" color={theme.colors.brandGreen}>
                        Log In
                      </Text>
                    </ChakraLink>
                  </Flex>
                </HStack>
              </form>
            </Box>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default SignupPage;
