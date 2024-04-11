import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Text, VStack, Heading, Flex } from '@chakra-ui/react';

function ExerciseScreen() {
  const exercises = JSON.parse(localStorage.getItem('exercises')) || [];
  const navigate = useNavigate();

  return (
    <VStack spacing={6} align="stretch">
      <Box bg="blue.500" color="white" p={4} borderRadius="md">
        <Heading size="md" textAlign="center">This Week's Goal: 5.5/10h</Heading>
      </Box>
      <Heading as="h3" size="lg" mb={4} ml={4}>
        Exercise Log
      </Heading>
      {exercises.length > 0 ? exercises.map((exercise, index) => (
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
          <Heading size="md" mb={2}>{exercise.name}</Heading>
          {exercise.distance && exercise.distance > 0 ? (
            <>
              <Text>{exercise.distance} miles</Text>
              <Text>{exercise.intensity}% intensity</Text>
            </>
          ) : (
            <>
              <Text>{exercise.weight} lbs</Text>
              <Text>{exercise.reps} reps</Text>
            </>
          )}
        </Box>
      )) : (
        <Text textAlign="center">No exercises added yet.</Text>
      )}
      <Flex justify="space-around" bottom={"12vh"} position={"absolute"} width="100%">
        <Button colorScheme="twitter" onClick={() => navigate("/exercise/recommendations")}>View Recommendations</Button>
        <Button colorScheme="twitter" onClick={() => navigate("/exercise/add")}>Add Exercise</Button>
      </Flex>
    </VStack>
  );
}

export default ExerciseScreen;
