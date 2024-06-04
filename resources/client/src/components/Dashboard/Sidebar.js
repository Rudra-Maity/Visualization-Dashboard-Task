// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   IconButton,
//   useDisclosure,
//   Divider,
//   Text,
//   Flex,
//   Heading,
//   Avatar,
//   List,
//   ListItem,
//   ListIcon,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { SettingsIcon } from "@chakra-ui/icons";
// import { MdDashboard, MdAssignment, MdSettings, MdExitToApp } from "react-icons/md";
// import { AiOutlineMenu } from "react-icons/ai";
// import { useToast } from "@chakra-ui/react"; 

const AdminDashboard = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [selectedOption, setSelectedOption] = useState("");
  // const toast = useToast();

  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  // const handleLogout = () => {
  //   toast({
  //     title: "Logged Out",
  //     description: "You have been successfully logged out.",
  //     status: "success",
  //     duration: 2000,
  //     isClosable: true,
  //   });

  //   setTimeout(() => {
  //     window.location.href = "/";
  //   }, 2000);
  // };

  // return (
  //   <Container>
  //     {/* Hamburger Menu Icon in Navbar */}
  //     <Flex justify="space-between" align="center" py={4} position={'fixed'} bg={'blue.500'} width={'100%'}>
  //       <IconButton
  //         icon={<AiOutlineMenu />}
  //         onClick={onOpen}
  //         colorScheme="teal"
  //         variant="ghost"
  //       />
  //       <Heading size="md">Admin Dashboard</Heading>
  //       <Box></Box>
  //     </Flex>

  //     <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
  //       <DrawerOverlay />
  //       <DrawerContent
  //         bg={useColorModeValue("blue.50", "gray.800")}
  //         color={useColorModeValue("green.800", "white")}
  //       >
  //         <DrawerHeader
  //           borderBottomWidth="1px"
  //           fontSize="xl"
  //           fontWeight="bold"
  //           color="teal.500"
  //           display="flex"
  //           alignItems="center"
  //         >
  //           <SettingsIcon mr={2} /> Admin Dashboard
  //         </DrawerHeader>
  //         <DrawerBody>
  //           <Flex flexDirection="column">
  //             <Box>
  //               <List spacing={3}>
  //                 <ListItem cursor="pointer">
  //                   <ListIcon as={MdDashboard} fontSize="xl" />
  //                   Dashboard
  //                 </ListItem>
  //                 <ListItem cursor="pointer">
  //                   <ListIcon as={MdAssignment} fontSize="xl" />
  //                   Tasks
  //                 </ListItem>
  //                 <ListItem cursor="pointer">
  //                   <ListIcon as={MdSettings} fontSize="xl" />
  //                   Settings
  //                 </ListItem>
  //                 <Divider my={2} />
  //                 <ListItem cursor="pointer" onClick={handleLogout}>
  //                   <ListIcon as={MdExitToApp} fontSize="xl" />
  //                   Logout
  //                 </ListItem>
  //               </List>
  //             </Box>
  //             <Divider my={4} />
  //             <Flex alignItems="center">
  //               <Avatar
  //                 size="lg"
  //                 src="/Iam.jpeg"
  //                 mr={4}
  //               />
  //               <Box>
  //                 <Heading size="md">Rudrpriya Maity</Heading>
  //                 <Text
  //                   fontSize="sm"
  //                   color={useColorModeValue("gray.500", "gray.400")}
  //                 >
  //                   Web Developer
  //                 </Text>
  //               </Box>
  //             </Flex>
  //           </Flex>
  //         </DrawerBody>
  //       </DrawerContent>
  //     </Drawer>
  //   </Container>
  // );
};

export default AdminDashboard;
