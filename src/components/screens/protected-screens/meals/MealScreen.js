import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Text, VStack, Heading, Flex } from '@chakra-ui/react';

function MealScreen() {
  const meals = JSON.parse(localStorage.getItem('meals')) || [];
  const navigate = useNavigate();

  return (
    <VStack spacing={6} align="stretch">
      <Box bg="blue.500" color="white" p={4} borderRadius="md">
        <Heading size="md" textAlign="center">This Week's Diet Goal: 2100/2200 avg. calories</Heading>
      </Box>
      <Heading as="h3" size="lg" mb={4} ml={4}>
        Meal Log
      </Heading>
      {meals.length > 0 ? meals.map((meal, index) => (
        <Box
          key={index}
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          w="100%"
          bg="gray.50"
          boxShadow="sm"
          _hover={{ boxShadow: "md" }}
        >
          <Heading size="md" mb={2}>{meal.name}</Heading>
          <Text>{meal.calories} calories</Text>
          <Text>{meal.tastiness}/100 tastiness score</Text>
        </Box>
      )) : (
        <Text textAlign="center">No meals added yet.</Text>
      )}
      <Flex justify="space-around" bottom={"12vh"} position={"absolute"} width="100%">
        <Button colorScheme="twitter" onClick={() => navigate("/meals/recommendations")}>View Recommendations</Button>
        <Button colorScheme="twitter" onClick={() => navigate("/meals/add")}>Add Meal</Button>
      </Flex>
    </VStack>
  );
}

export default MealScreen;
