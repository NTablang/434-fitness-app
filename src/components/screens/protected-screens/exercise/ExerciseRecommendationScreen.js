import React, { useState } from 'react';
import {
  VStack,
  Heading,
  Text,
  Image,
  Flex,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalFooter,
  Button
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import bench from "../../../../bench.png";
import squat from "../../../../squat.png";
import running from "../../../../running.png";
import pull from "../../../../pull.png";

const recommendations = [
  {
    id: 1,
    name: 'Bench Press',
    category: 'Weights',
    targetMuscle: 'Chest',
    imageUrl: bench,
    description: "The bench press is a fundamental compound exercise that targets the pectoral muscles, triceps, and deltoids. Perfect for building upper body strength, it is a staple in any resistance training regimen. Executing this movement with proper form ensures maximum muscle engagement and effectiveness."
  },
  {
    id: 2,
    name: 'Barbell Squat',
    category: 'Weights',
    targetMuscle: 'Quads',
    imageUrl: squat,
    description: "Barbell squats are the quintessential exercise for developing strength in the legs and core. This powerful movement engages your quadriceps, hamstrings, glutes, and lower back. Regular squats contribute to improved lower body strength, better balance, and functional mobility."
  },
  {
    id: 3,
    name: 'Long-Distance Run',
    category: 'Cardio',
    imageUrl: running,
    description: "Long-distance running is an excellent cardiovascular workout that challenges your stamina and endurance. It's a mental and physical journey that can improve heart health, enhance lung capacity, and release endorphins. Incorporating this activity into your routine can lead to improved aerobic fitness and mental clarity."
  },
  {
    id: 4,
    name: 'Seated Cable Row',
    category: 'Weights',
    targetMuscle: 'Lats',
    imageUrl: pull,
    description: "Seated cable rows are a versatile exercise designed to improve back muscularity and strength. By targeting the latissimus dorsi, this exercise also works the biceps and rhomboids, promoting good posture and spinal stability. Consistent training can lead to a stronger, more defined back."
  },
];
function ExerciseRecommendationScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedExercise, setSelectedExercise] = useState(null);
  const navigate = useNavigate();

  const openExerciseDetails = (exercise) => {
    setSelectedExercise(exercise);
    onOpen();
  };

  return (
    <VStack bg="white" minH="100vh" px={8} py={4} color="black" spacing={8}>
      <Flex w="100%" align="center">
        <Icon as={ChevronLeftIcon} w={10} h={10} onClick={() => navigate("/exercise")} />
        <Heading size="lg" textAlign="center" flex={1}>Exercise Recommendations</Heading>
        <Icon visibility="hidden" as={ChevronLeftIcon} w={10} h={10} />
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
            p
            ={5}
            borderWidth="2px"
            borderRadius="15px"
            borderColor="gray.200"
            align="center"
            bg="gray.50"
            _hover={{ bg: "gray.100" }}
            onClick={() => openExerciseDetails(rec)}
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
      {selectedExercise && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedExercise.name}</ModalHeader>
            <ModalCloseButton />
            <Image
              src={selectedExercise.imageUrl}
              alt={selectedExercise.name}
              objectFit="cover"
              width="100%"
              maxH="50%"
            />
            <ModalBody>
              <Text fontSize="md">{selectedExercise.description}</Text>
              <Text fontSize="sm" mt={3}><strong>Category:</strong> {selectedExercise.category}</Text>
              <Text fontSize="sm"><strong>Target Muscle:</strong> {selectedExercise.category === "Cardio" ? "Burn Fat" : selectedExercise.targetMuscle}</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </VStack>
  );
}

export default ExerciseRecommendationScreen;
