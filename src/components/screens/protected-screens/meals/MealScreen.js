import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Text, VStack, Heading, Flex } from "@chakra-ui/react";
import { CustomButton } from "../../unprotected-screens/SplashScreen";
import nomealslogo from "../../../../Nomeal.png";

function MealScreen() {
  const meals = JSON.parse(localStorage.getItem("meals")) || [];
  const targetWeight = JSON.parse(localStorage.getItem("user"))?.targetWeight;
  const targetCal = JSON.parse(localStorage.getItem("user"))?.targetCaloriesConsumed;
  const navigate = useNavigate();
  const requiredCalories = targetWeight * 15;
  const totalMealCalories = meals.reduce((acc, meal) => (acc - 0) + (meal.calories - 0), 0);

  return (
    <VStack spacing={6} align="stretch"  className="max-h-screen overflow-scroll">
      <Box color="white" p={6} className="blue-bg rounded-b-2xl">
        <Heading size="md" textAlign="center">
          This Week's Diet Goal: {totalMealCalories}/{targetCal} avg. calories
        </Heading>
      </Box>
      <Heading as="h3" size="lg" mb={4} ml={4}>
        Meal Log
      </Heading>
      {meals.length > 0 ? (
        meals.map((meal, index) => (
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
              {meal.name}
            </Heading>
            <Text>{meal.calories} calories</Text>
            <Text>{meal.tastiness}/100 tastiness score</Text>
          </Box>
        ))
      ) : (
        <div className="w-full h-full flex flex-col items-center mt-16">
          <img src={nomealslogo} alt={"symbol"} className="w-72 h-auto" />
          <Text textAlign="center">No meals added yet.</Text>
        </div>
      )}
      <Flex
        justify="space-around"
        bottom={"12vh"}
        position={"absolute"}
        width="100%"
      >
        <CustomButton
          onClick={() => navigate("/meals/recommendations")}
          label={"View Recommendations"}
          className={"!text-base !px-4 !py-3 !rounded-xl"}
        />
        <CustomButton
          onClick={() => navigate("/meals/add")}
          label={"Add Meal"}
          className={"!text-base !px-4 !py-3 !rounded-xl"}
        />
      </Flex>
    </VStack>
  );
}

export default MealScreen;
