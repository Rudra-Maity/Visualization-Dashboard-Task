import React, { useState } from "react";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
  Divider,
  Text,
  Flex,
  Heading,
  Avatar,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SettingsIcon, SearchIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { MdDashboard, MdAssignment, MdSettings, MdExitToApp } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { useToast } from "@chakra-ui/react"; 
import { useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState("");
  const toast = useToast();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <Box
      py={2}
      bgGradient="linear(to-r, teal.400, blue.500)"
      position="sticky"
      top={0}
      zIndex={100}
      boxShadow="md"
    >
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <IconButton
            icon={<AiOutlineMenu />}
            onClick={onOpen}
            colorScheme="teal"
            variant="ghost"
          />
          <Heading fontSize="2xl" fontWeight="bold" color="white">
            MyApp
          </Heading>
          <InputGroup w="50%">
            <Input
              type="text"
              placeholder="Search..."
              size="md"
              borderRadius="full"
              bg={colorMode === "blue" ? "white" : "black.100"}
              px={4}
              py={2}
              color={colorMode === "light" ? "blue.500" : "white"}
              _placeholder={{
                color: colorMode === "light" ? "black.500" : "gray.300",
              }}
              _focus={{ outline: "none" }}
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                size="md"
                borderRadius="full"
                bg="transparent"
                _hover={{ bg: "transparent" }}
              />
            </InputRightElement>
          </InputGroup>
          <Flex align="center">
            <IconButton
              aria-label="Toggle Theme"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              bg="transparent"
              border="none"
              onClick={toggleColorMode}
            />
            <Avatar
              size="sm"
              src="/Iam.jpeg"
              ml={3}
            />
          </Flex>
        </Flex>
      </Container>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue("blue.50", "gray.800")}
          color={useColorModeValue("green.800", "white")}
        >
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize="xl"
            fontWeight="bold"
            color="teal.500"
            display="flex"
            alignItems="center"
          >
            <SettingsIcon mr={2} /> Admin Dashboard
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDirection="column">
              <Box>
                <List spacing={3}>
                  <ListItem cursor="pointer">
                    <ListIcon as={MdDashboard} fontSize="xl" />
                    Dashboard
                  </ListItem>
                  <ListItem cursor="pointer">
                    <ListIcon as={MdAssignment} fontSize="xl" />
                    Tasks
                  </ListItem>
                  <ListItem cursor="pointer">
                    <ListIcon as={MdSettings} fontSize="xl" />
                    Settings
                  </ListItem>
                  <Divider my={2} />
                  <ListItem cursor="pointer" onClick={handleLogout}>
                    <ListIcon as={MdExitToApp} fontSize="xl" />
                    Logout
                  </ListItem>
                </List>
              </Box>
              <Divider my={4} />
              <Flex alignItems="center">
                <Avatar
                  size="lg"
                  src="/Iam.jpeg"
                  mr={4}
                />
                <Box>
                  <Heading size="md">Rudrpriya Maity</Heading>
                  <Text
                    fontSize="sm"
                    color={useColorModeValue("gray.500", "gray.400")}
                  >
                    Web Developer
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
//can u add here and make filter without extra component