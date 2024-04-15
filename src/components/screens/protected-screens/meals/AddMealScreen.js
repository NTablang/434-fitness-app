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
  Icon
} from '@chakra-ui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const AddMealScreen = () => {
  const location = useLocation();
  const toast = useToast();
  const selectedFields = location.state?.selectedFields || [];
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState('');
  const [tastiness, setTastiness] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [preparationTimeUnit, setPreparationTimeUnit] = useState('Minutes');
  const [carbs, setCarbs] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [sodium, setSodium] = useState('');
  const [sugar, setSugar] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  const navigate = useNavigate();


  const fieldMapping = {
    'Carbohydrates (g)': {
      value: carbs,
      setter: setCarbs,
    },
    'Protein (g)': {
      value: protein,
      setter: setProtein,
    },
    'Fat (g)': {
      value: fat,
      setter: setFat,
    },
    'Sodium (mg)': {
      value: sodium,
      setter: setSodium,
    },
    'Sugar (g)': {
      value: sugar,
      setter: setSugar,
    },
    'Additional Notes': {
      value: additionalNotes,
      setter: setAdditionalNotes,
    },

  };


  const handleSave = () => {
    console.log("saving meal data");
    // save new meal in local storage by getting existing meals and adding new one
    localStorage.getItem('meals') || localStorage.setItem('meals', JSON.stringify([]));
    const meals = JSON.parse(localStorage.getItem('meals'));
    const newMeal = {
      name: mealName,
      calories,
      tastiness,
      preparationTime,
      preparationTimeUnit,
      carbs,
      protein,
      fat,
      sodium,
      sugar,
      additionalNotes,
    }
    console.log('Adding new meal:');
    console.table(newMeal);
    meals.push(newMeal);
    localStorage.setItem('meals', JSON.stringify(meals));

    toast({
      title: 'Meal Created',
      description: 'Your meal has been created successfully.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    navigate('/meals');
  };

  return (
    <Box maxW="lg" mx="auto" p={4} >
      <div className="flex items-center gap-4">
        <XMarkIcon
          onClick={() => {
            navigate("/exercise");
          }}
          className="w-8 h-auto"
        />
        <Heading
          as="h2"
          size="xl"
          mb={2}
          className="mt-1 ml-28 font-[Poppins] tracking-tight"
        >
          Add Meal
        </Heading>
      </div>
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
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            placeholder="Chicken Parmesan"
          />
        </FormControl>
        <Flex>
          <FormControl mr={4}>
            <FormLabel>Total Calories</FormLabel>
            <Input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel>Tastiness Rating (1-100)</FormLabel>
          <Input
            type="number"
            value={tastiness}
            onChange={(e) => setTastiness(e.target.value)}
          />
        </FormControl>
        <Flex alignItems="flex-end">
          <FormControl mr={4}>
            <FormLabel>Preparation Time</FormLabel>
            <Input
              type="number"
              value={preparationTime}
              onChange={(e) => setPreparationTime(e.target.value)}
            />
          </FormControl>
          <FormControl width="180px">
            <Select
              value={preparationTimeUnit}
              onChange={(e) => setPreparationTimeUnit(e.target.value)}
            >
              <option value="Minutes">Minutes</option>
              <option value="Seconds">Seconds</option>
            </Select>
          </FormControl>
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
      < Stack direction="row" justify="center" mt={8} borderColor="transparent" >
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
      </Stack >

      <Stack direction="row" justify="end" mt={8}>
        <Button colorScheme="blue" onClick={handleSave}>
          Save
        </Button>
      </Stack>
    </Box >
  );
};

export default AddMealScreen;