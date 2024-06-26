import React, { useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <Box
      bg="linear-gradient(to bottom right, black, black)"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container 
      shadow={'10 24px 28px 0 black black'}
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow='2xl'
        borderColor="white" 
        textAlign="center"
      >
        <h1 style={{ color: 'white',fontSize:'20px' }}>Welcome Admin </h1>
        <form>
          <FormControl>
            <FormLabel style={{ color: 'white' }}> Email</FormLabel>
            <Input color={'white'}
              type="text"
              placeholder="Enter your username"
              value="admin@gmail.com"
              borderColor="white" 
              disabled
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel style={{ color: 'white' }}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value="admin" 
              borderColor="white"
              disabled
            />
          </FormControl>
          <Button colorScheme="green" mt={6} w="100%" onClick={handleLogin}>
            Login
          </Button>
          <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined}>
            <AlertDialogOverlay>
              <AlertDialogContent bg="white" color="black">
                <AlertDialogHeader fontSize='22px'>Welcome Admin </AlertDialogHeader>
                <AlertDialogBody>
                  Redirecting to the dashboard page...
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
