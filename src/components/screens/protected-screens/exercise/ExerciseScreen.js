import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Text, VStack, Heading, Flex } from "@chakra-ui/react";
import { CustomButton } from "../../unprotected-screens/SplashScreen";
import noexerciselogo from "../../../../Noexercise.png";

function ExerciseScreen() {
  const exercises = JSON.parse(localStorage.getItem("exercises")) || [];
  const targetCal = JSON.parse(localStorage.getItem("user"))?.targetCaloriesBurned;
  const totalCaloriesBurned = exercises.reduce((acc, exercise) => acc +
    (exercise.distance ? exercise.distance * exercise.intensity : exercise.weight * exercise.repetitions * exercise.sets * 0.1)
    , 0);

  const navigate = useNavigate();

  return (
    <VStack spacing={6} align="stretch" className="max-h-screen overflow-scroll">
      <Box color="white" p={6} className="blue-bg rounded-b-2xl">
        <Heading size="md" textAlign="center">
          This Week's Goal: {totalCaloriesBurned}/{targetCal} calories burned
        </Heading>
      </Box>
      <Heading as="h3" size="lg" mb={4} ml={4}>
        Exercise Log
      </Heading>
      {exercises.length > 0 ? (
        exercises.map((exercise, index) => (
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
            <Heading size="md" mb={2}>
              {exercise.name}
            </Heading>
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
        ))
      ) : (
        <div className="w-full h-full flex flex-col items-center mt-16">
          <img src={noexerciselogo} alt={"symbol"} className="w-72 h-auto" />
          <Text textAlign="center">No exercises added yet.</Text>
        </div>
      )}
      <Flex
        justify="space-around"
        bottom={"12vh"}
        position={"absolute"}
        width="100%"
      >
        <CustomButton
          onClick={() => navigate("/exercise/recommendations")}
          label={"View Recommendations"}
          className={"!text-base !px-4 !py-3 !rounded-xl"}
        />
        <CustomButton
          onClick={() => navigate("/exercise/add")}
          label={"Add Exercise"}
          className={"!text-base !px-4 !py-3 !rounded-xl"}
        />
      </Flex>
    </VStack>
  );
}

export default ExerciseScreen;
