import React from "react";
import { Box, Text, Link, Flex, useColorModeValue, Icon, Stack } from "@chakra-ui/react";
import { RiFacebookBoxFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const footerBgGradient = useColorModeValue("linear(to-r, teal.500, blue.500)", "linear(to-r, teal.200, blue.200)");
  const textColor = useColorModeValue("white", "gray.800");
  const iconColor = useColorModeValue("whiteAlpha.900", "gray.800");

  return (
    <Box bgGradient={footerBgGradient} py={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
        px={4}
      >
        <Text fontSize="md" color={textColor} mb={{ base: 4, md: 0 }}>
          &copy; 2024 Rudrapriy Maity. All rights reserved.
        </Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center">
          <Link fontSize="md" color={textColor} _hover={{ textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          <Link fontSize="md" color={textColor} _hover={{ textDecoration: "underline" }}>
            Terms of Service
          </Link>
          <Flex align="center">
            <Link href="https://www.facebook.com" isExternal>
              <Icon as={RiFacebookBoxFill} boxSize={6} color={iconColor} mx={2} />
            </Link>
            <Link href="https://www.twitter.com" isExternal>
              <Icon as={RiTwitterFill} boxSize={6} color={iconColor} mx={2} />
            </Link>
            <Link href="https://www.instagram.com" isExternal>
              <Icon as={RiInstagramFill} boxSize={6} color={iconColor} mx={2} />
            </Link>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
