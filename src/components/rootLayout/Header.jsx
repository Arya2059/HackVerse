import React from "react";
import { Flex, HStack, Heading, useColorModeValue } from "@chakra-ui/react";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <Flex
      justifyContent="space-between"
      gap="1rem"
      alignItems="center"
      px={{ base: 2, lg: 4 }}
      py={2}
      borderBottom="1px"
      borderColor={useColorModeValue("brandBlack", "brandGreen")} // Custom colors
    >
      <HStack spacing={4} ml={2}>
        <Heading
          fontSize="1.5rem"
          display={{ base: "none", lg: "block" }}
          color={useColorModeValue("brandBlack", "brandGreen")} // Custom colors
        >
          Hackergram
        </Heading>
      </HStack>

      <Searchbar />
    </Flex>
  );
};

export default Header;
