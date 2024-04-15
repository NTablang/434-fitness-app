import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Flex,
  Link,
  useToast,
  HStack,
} from '@chakra-ui/react';

const ProfileScreen = () => {
  const location = useLocation();
  const selectedFields = location.state?.selectedFields || [];
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});


  const navigate = useNavigate();
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleSave = () => {
    // Handle saving the profile data based on the selected tab
    console.log("saving profile data");

    // Save the profile data to local storage
    localStorage.setItem('user', JSON.stringify(user));

    // show a success message to the user, using a toast message
    toast({
      title: 'Profile Saved',
      description: 'Your profile data has been saved successfully.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box maxW="lg" mx="auto" p={4}>
      <HStack justify="space-between" spacing={4}>
        <Heading as="h2" size="xl" mb={2}>
          Personal Profile
        </Heading>
        <Button colorScheme="red" onClick={handleSignOut}>
          Sign Out
        </Button>
      </HStack>
      <Heading as="h3" size="lg" mb={4} mt={10}>
        About Me
      </Heading>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            name="firstName"
            value={user.firstName || ''}
            onChange={handleInputChange}
            placeholder="John"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={user.lastName || ''}
            onChange={handleInputChange}
            placeholder="Smith"
          />
        </FormControl>
        <Flex>
          <FormControl>
            <FormLabel>Height (inches)</FormLabel>
            <Input
              type="number"
              name="height"
              value={user.height || ''}
              onChange={handleInputChange}
            />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel>Weight (pounds)</FormLabel>
          <Input
            type="number"
            name="weight"
            value={user.weight || ''}
            onChange={handleInputChange}
          />
        </FormControl>
      </Stack>
      <Stack spacing={4} mt={8}>
        <Heading as="h3" size="lg" mb={4}>
          Goals
        </Heading>
        <Flex>
          <FormControl>
            <FormLabel>Target Weight</FormLabel>
            <Input
              type="number"
              name="targetWeight"
              value={user.targetWeight || ''}
              onChange={handleInputChange}
            />
          </FormControl>
        </Flex>
      </Stack>
      <Stack direction="row" justify="end" mt={8}>
        <Button colorScheme="blue" onClick={handleSave}>
          Save
        </Button>
      </Stack>
    </Box >
  );
};

export default ProfileScreen;