import React, { useState, useEffect } from "react";
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
  Select,
} from "@chakra-ui/react";
import { SettingsIcon, SearchIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { MdDashboard, MdAssignment, MdSettings, MdExitToApp } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { useToast } from "@chakra-ui/react"; 
import { useColorMode } from "@chakra-ui/react";

const Navbar = ({ data, setFilteredData }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEndYear, setSelectedEndYear] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedPEST, setSelectedPEST] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedSWOT, setSelectedSWOT] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const toast = useToast();

  const uniqueValues = (key) => {
    const values = data.map(item => item[key]).filter(value => value);
    return [...new Set(values)];
  };

  const handleOptionChange = (setter) => (event) => {
    setter(event.target.value);
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

  useEffect(() => {
    const filtered = data.filter(item =>
      (selectedEndYear === '' || item.end_year === selectedEndYear) &&
      (selectedTopic === '' || item.topic === selectedTopic) &&
      (selectedSector === '' || item.sector === selectedSector) &&
      (selectedRegion === '' || item.region === selectedRegion) &&
      (selectedPEST === '' || item.pest === selectedPEST) &&
      (selectedSource === '' || item.source === selectedSource) &&
      (selectedSWOT === '' || item.swot === selectedSWOT) &&
      (selectedCountry === '' || item.country === selectedCountry) &&
      (selectedCity === '' || item.city === selectedCity)
    );
    setFilteredData(filtered);
  }, [data, selectedEndYear, selectedTopic, selectedSector, selectedRegion, selectedPEST, selectedSource, selectedSWOT, selectedCountry, selectedCity, setFilteredData]);

  return (
    <Box
      py={2}
      bgGradient="linear(to-r, teal.400, blue.500)"
      position="sticky"
      top={0}
      zIndex={100}
      boxShadow="md"
    >
      <Container maxW="container.lg" padding='4'>
        <Flex justify="space-between" align="center">
          <IconButton
            icon={<AiOutlineMenu />}
            onClick={onOpen}
            colorScheme="teal"
            variant="ghost"
            fontSize='3xl'
          />
          <Heading fontSize="2xl" fontWeight="bold" color="white">
            MyApp
          </Heading>
          <InputGroup w="50%">
            <Input
              type="text"
              placeholder="Search..."
              size="md"
              borderRadius='2xl'
              bg={colorMode === "black" ? "white" : "black.100"}
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
                size='lg'
                borderRadius='2xl'
                borderLeftRadius='0px'
                backgroundColor='gray'
                _hover={{ bg: "gray.400" }}
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
              size='md'
              src="/Iam.jpeg"
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
              <Flex flexDirection="column" spacing={3}>
                <Select
                  placeholder="End Year"
                  value={selectedEndYear}
                  onChange={handleOptionChange(setSelectedEndYear)}
                >
                  {uniqueValues('end_year').map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Select>
                <Select
                  placeholder="Topic"
                  value={selectedTopic}
                  onChange={handleOptionChange(setSelectedTopic)}
                >
                  {uniqueValues('topic').map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Select>
                <Select
                  placeholder="Sector"
                  value={selectedSector}
                  onChange={handleOptionChange(setSelectedSector)}
                >
                  {uniqueValues('sector').map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Select>
                <Select
                  placeholder="Region"
                  value={selectedRegion}
                  onChange={handleOptionChange(setSelectedRegion)}
                >
                  {uniqueValues('region').map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Select>
                <Select
                  placeholder="PEST"
                  value={selectedPEST}
                  onChange={handleOptionChange(setSelectedPEST)}
                >
                  {uniqueValues('pest').map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Select>
                <Select
                  placeholder="Source"
                  value={selectedSource}
                  onChange={handleOptionChange(setSelectedSource)}
                >
                  {uniqueValues('source').map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Select>
                <Select
                  placeholder="SWOT"
                  value={selectedSWOT}
                  onChange={handleOptionChange(setSelectedSWOT)}
                >
                  {uniqueValues('swot').map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Select>
                <Select
                  placeholder="Country"
                  value={selectedCountry}
                  onChange={handleOptionChange(setSelectedCountry)}
                >
                  {uniqueValues('country').map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Select>
                <Select
                  placeholder="City"
                  value={selectedCity}
                  onChange={handleOptionChange(setSelectedCity)}
                >
                  {uniqueValues('city').map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Select>
              </Flex>
              <Flex alignItems="center" mt={4}>
                <Avatar
                  size='xl'
                  src="/Iam.jpeg"
                  mr={4}
                />
                <Box>
                  <Heading size="md">Rudrpriya Maity</Heading>
                  <Text
                    fontSize="sm"
                    color={useColorModeValue("gray.500", "gray.400")}
                  >
                   Full Stack Web Developer
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
