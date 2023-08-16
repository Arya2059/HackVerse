import React from 'react';
import { Button, Flex, Heading, extendTheme, ChakraProvider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../slices/authSlice';

// Custom Chakra UI theme with hacker colors
const theme = extendTheme({
  colors: {
    brandGreen: '#00FF00', // Green color
    brandBlack: '#000000' // Black color
  }
});

const ErrorPage = () => {
  const dispatch = useDispatch();

  const refreshHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex flexDir="column" p={8} mt={8} gap={8} alignItems="center">
        <Heading
          textAlign="center"
          color="brandGreen" // Set heading color to brandGreen
        >
          Something went wrong!
        </Heading>
        <Button
          onClick={refreshHandler}
          colorScheme="teal"
          bg="brandGreen" // Set background color to brandGreen
          borderColor="brandGreen" // Set border color to brandGreen
          _hover={{
            bg: 'transparent', // Set background color on hover to transparent
            borderColor: 'brandGreen', // Set border color on hover to brandGreen
            color: 'brandGreen' // Set text color on hover to brandGreen
          }}
        >
          Refresh
        </Button>
      </Flex>
    </ChakraProvider>
  );
};

export default ErrorPage;
