import React from 'react';
import { VStack, Heading, Text, Image, Flex, Icon } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import cparm from "../../../../cparm.png";
import mac from "../../../../mac.png";
import salad from "../../../../salad.png";
import salmon from "../../../../salmon.png";

const recommendations = [
  { id: 1, name: 'Chicken Parmesan', category: 'Fine Dining', calories: 950, imageUrl: cparm },
  { id: 2, name: 'Mac & Cheese with Chicken', category: 'Quick & Easy', calories: 1200, imageUrl: mac },
  { id: 3, name: 'Caesar Salad with Chicken', category: 'Low-Calorie', calories: 510, imageUrl: salad },
  { id: 4, name: 'Teriyaki Salmon & Rice', category: 'Fine Dining', calories: 780, imageUrl: salmon },
];
function MealRecommendationScreen() {

  const navigate = useNavigate();
  return (
    <VStack bg="white" minH="100vh" px={8} py={4} color="black" spacing={8}>
      <Flex w="100%" align="center">
        <Icon as={ChevronLeftIcon} w={10} h={10} onClick={() => {
          navigate("/meals")
        }} />
        <Heading size="lg" textAlign="center" flex={1}>Meal Recommendations</Heading>
        <Icon visibility="hidden" as={ChevronLeftIcon} w={10} h={10} /> {/* Invisible icon for balance */}
      </Flex>
      <VStack spacing={5} align="stretch">
        <Text fontSize="xl" my={2}>
          For your goal of: Lean & Tone
        </Text>
        <Text fontSize="md" fontWeight="semibold">
          We recommend you try out  the following meals:
        </Text>
        {recommendations.map((rec) => (
          <Flex
            key={rec.id}
            p={5}
            borderWidth="2px"
            borderRadius="15px"
            borderColor="gray.200"
            align="center"
            bg="gray.50"
            _hover={{ bg: "gray.100" }}
          >
            <Image
              borderRadius="full"
              boxSize="75px"
              objectFit="cover"
              src={rec.imageUrl}
              alt={rec.name}
              mr={6}
            />
            <VStack align="start" flex={1}>
              <Heading size="md">{rec.name}</Heading>
              <Text fontSize="sm">{rec.category} | {rec.calories} calories</Text>
            </VStack>
            <Icon as={ChevronRightIcon} w={6} h={6} />
          </Flex>
        ))}
      </VStack>
    </VStack>
  );
}

export default MealRecommendationScreen;
