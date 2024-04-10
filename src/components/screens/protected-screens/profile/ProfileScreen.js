import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  TabPanel,
  FormControl,
  FormLabel,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  Stack,
  Flex,
  Link,
  Select,
  useToast,
} from '@chakra-ui/react';

const ProfileScreen = () => {
  const location = useLocation();
  const selectedFields = location.state?.selectedFields || [];
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [height, setHeight] = useState(localStorage.getItem('height') || '');
  const [weight, setWeight] = useState(localStorage.getItem('weight') || '');
  const [targetWeight, setTargetWeight] = useState(localStorage.getItem('targetWeight') || '');
  const navigate = useNavigate();
  const toast = useToast();

  const handleSave = () => {
    // Handle saving the profile data based on the selected tab
    console.log("saving profile data");
    // Save the profile data to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('height', height);
    localStorage.setItem('weight', weight);
    localStorage.setItem('targetWeight', targetWeight);
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
      <Heading as="h2" size="xl" mb={2}>
        Personal Profile
      </Heading>
      <Heading as="h3" size="lg" mb={4} mt={10}>
        About Me
      </Heading>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Smith"
          />
        </FormControl>
        <Flex>
          <FormControl mr={4}>
            <FormLabel>Height (inches)</FormLabel>
            <Input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel>Weight (pounds)</FormLabel>
          <Input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </FormControl>
      </Stack>
      <Stack spacing={4} mt={8}>
        <Heading as="h3" size="lg" mb={4}>
          Goals
        </Heading>
        <Flex>
          <FormControl mr={4}>
            <FormLabel>Target Weight</FormLabel>
            <Input
              type="number"
              value={targetWeight}
              onChange={(e) => setTargetWeight(e.target.value)}
            />
          </FormControl>
        </Flex>
      </Stack>
      <Stack direction="row" justify="center" mt={8} borderColor="transparent">
        <Link
          fontSize="md"
          color="blue.500"
          fontWeight="medium"
          _hover={{ textDecoration: 'underline' }}
          cursor="pointer"
          onClick={() => navigate('/profiles/add/fields')}
        >
          Add fields
        </Link>
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