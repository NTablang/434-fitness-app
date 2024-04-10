import React from 'react';
import { VStack, Heading, Text, Image, Flex, Icon } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const recommendations = [
  // Populate with actual recommendation data and images
  { id: 1, name: 'Bench Press', category: 'Weights', targetMuscle: 'Chest', imageUrl: 'https://static.strengthlevel.com/images/exercises/bench-press/bench-press-800.jpg' },
  { id: 2, name: 'Barbell Squat', category: 'Weights', targetMuscle: 'Quads', imageUrl: 'https://experiencelife.lifetime.life/wp-content/uploads/2021/08/f2-barbell-back-squat.jpg' },
  { id: 3, name: 'Long-Distance Run', category: 'Cardio', imageUrl: 'https://media.istockphoto.com/id/1341077450/photo/profile-side-view-of-runner-man-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=DfjSUIn1ba5Slsxd6UrCK8JkHwFz9AMD733rX5d9jnM=' },
  { id: 4, name: 'Seated Cable Row', category: 'Weights', targetMuscle: 'Lats', imageUrl: 'https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/05/cable-row-bar-man-1109.jpg?quality=86&strip=all' },
];
function ExerciseRecommendationScreen() {

  const navigate = useNavigate();
  return (
    <VStack bg="white" minH="100vh" px={8} py={4} color="black" spacing={8}>
      <Flex w="100%" align="center">
        <Icon as={ChevronLeftIcon} w={10} h={10} onClick={() => {
          navigate("/exercise")
        }} />
        <Heading size="lg" textAlign="center" flex={1}>Exercise Recommendations</Heading>
        <Icon visibility="hidden" as={ChevronLeftIcon} w={10} h={10} /> {/* Invisible icon for balance */}
      </Flex>
      <VStack spacing={5} align="stretch">
        <Text fontSize="xl" my={2}>
          For your goal of: Lean & Tone
        </Text>
        <Text fontSize="md" fontWeight="semibold">
          We recommend you perform the following exercises:
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
              <Text fontSize="sm">{rec.category} | {rec.category === "Cardio" ? "Burn Fat" : rec.targetMuscle}</Text>
            </VStack>
            <Icon as={ChevronRightIcon} w={6} h={6} />
          </Flex>
        ))}
      </VStack>
    </VStack>
  );
}

export default ExerciseRecommendationScreen;
