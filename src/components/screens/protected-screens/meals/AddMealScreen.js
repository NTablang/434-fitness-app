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
} from '@chakra-ui/react';

const AddMealScreen = () => {
  const location = useLocation();
  const selectedFields = location.state?.selectedFields || [];
  const [selectedTab, setSelectedTab] = useState('cardio');
  const [mealName, setMealName] = useState('');
  const [distance, setDistance] = useState('');
  const [intensity, setIntensity] = useState(75);
  const [weightMealName, setWeightMealName] = useState('');
  const [sets, setSets] = useState('');
  const [repetitions, setRepetitions] = useState('');
  const [weight, setWeight] = useState('');
  const [recoveryTime, setRecoveryTime] = useState('');
  const [recoveryTimeUnit, setRecoveryTimeUnit] = useState('Minutes');
  const navigate = useNavigate();

  const [sweatAmount, setSweatAmount] = useState('');
  const [feelingDuringWorkout, setFeelingDuringWorkout] = useState('');
  const [feelingPostWorkout, setFeelingPostWorkout] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');


  const fieldMapping = {

    'Sweat Amount': {
      value: sweatAmount,
      setter: setSweatAmount,
    },
    'Feeling During Workout': {
      value: feelingDuringWorkout,
      setter: setFeelingDuringWorkout,
    },
    'Feeling Post-Workout': {
      value: feelingPostWorkout,
      setter: setFeelingPostWorkout,
    },
    'Additional Notes': {
      value: additionalNotes,
      setter: setAdditionalNotes,
    },
  };


  const handleSave = () => {
    // Handle saving the meal data based on the selected tab
    console.log("saving meal data");
  };

  return (
    <Box maxW="lg" mx="auto" p={4}>
      <Heading as="h2" size="xl" mb={2}>
        Add Meal
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={4}>
        {new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </Text>
      <Heading as="h3" size="lg" mb={4}>
        Meal Details
      </Heading>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Name of Meal</FormLabel>
          <Input
            type="text"
            value={weightMealName}
            onChange={(e) => setWeightMealName(e.target.value)}
            placeholder="Chicken Parmesan"
          />
        </FormControl>
        <Flex>
          <FormControl mr={4}>
            <FormLabel>Total Calories</FormLabel>
            <Input
              type="number"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
            />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel>Tastiness Rating (1-100)</FormLabel>
          <Input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </FormControl>
        <Flex align="center">
          <FormControl mr={4}>
            <FormLabel>Preparation Time</FormLabel>
            <Input
              type="number"
              value={recoveryTime}
              onChange={(e) => setRecoveryTime(e.target.value)}
            />
          </FormControl>
          <Select
            value={recoveryTimeUnit}
            onChange={(e) => setRecoveryTimeUnit(e.target.value)}
          >
            <option value="Minutes">Minutes</option>
            <option value="Seconds">Seconds</option>
          </Select>
        </Flex>
      </Stack>
      {
        selectedFields.map((field) => {
          const { value, setter } = fieldMapping[field];

          return (
            <FormControl key={field}>
              <FormLabel>{field}</FormLabel>
              <Input
                type="text"
                value={value}
                onChange={(e) => setter(e.target.value)}
              />
            </FormControl>
          );
        })
      }
      <Stack direction="row" justify="center" mt={8} borderColor="transparent">
        <Link
          fontSize="md"
          color="blue.500"
          fontWeight="medium"
          _hover={{ textDecoration: 'underline' }}
          cursor="pointer"
          onClick={() => navigate('/meals/add/fields')}
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

export default AddMealScreen;