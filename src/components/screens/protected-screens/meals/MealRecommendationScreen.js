import React, { useState } from 'react';
import { VStack, Heading, Text, Image, Flex, Icon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import cparm from "../../../../cparm.png";
import mac from "../../../../mac.png";
import salad from "../../../../salad.png";
import salmon from "../../../../salmon.png";

const recommendations = [
  {
    id: 1,
    name: 'Chicken Parmesan',
    description: "Indulge in a hearty Italian favorite with our Chicken Parmesan. This dish features a perfectly breaded chicken breast, topped with a rich marinara sauce and melted mozzarella cheese. Served with a side of al dente pasta, it's a comfort meal that's sure to satisfy.",
    category: 'Fine Dining',
    calories: 950,
    imageUrl: cparm
  },
  {
    id: 2,
    name: 'Mac & Cheese with Chicken',
    description: "Enjoy the ultimate comfort food with our Mac & Cheese with Chicken. This dish combines the creamy, cheesy goodness of classic mac & cheese with succulent pieces of grilled chicken. It's a hearty, satisfying meal that's perfect for both kids and adults alike.",
    category: 'Quick & Easy',
    calories: 1200,
    imageUrl: mac
  },
  {
    id: 3,
    name: 'Caesar Salad with Chicken',
    description: "Our Caesar Salad with Chicken is a light, nutritious option that doesn't skimp on flavor. Crisp romaine lettuce, freshly grated Parmesan cheese, and crunchy croutons are tossed in a tangy Caesar dressing. Topped with grilled chicken breast, it's a tasty way to stay on track with your health goals.",
    category: 'Low-Calorie',
    calories: 510,
    imageUrl: salad
  },
  {
    id: 4,
    name: 'Teriyaki Salmon & Rice',
    description: "Dive into a flavorful experience with our Teriyaki Salmon & Rice. The salmon is marinated and glazed in a homemade teriyaki sauce and then grilled to perfection. Served alongside steamed jasmine rice and stir-fried vegetables, this dish offers a perfect balance of sweet and savory.",
    category: 'Fine Dining',
    calories: 780,
    imageUrl: salmon
  },
];


function MealRecommendationScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMeal, setSelectedMeal] = useState(null);
  const navigate = useNavigate();

  const openMealDetails = (meal) => {
    setSelectedMeal(meal);
    onOpen();
  };

  return (
    <VStack bg="white" minH="100vh" px={8} py={4} color="black" spacing={8}>
      <Flex w="100%" align="center">
        <Icon as={ChevronLeftIcon} w={10} h={10} onClick={() => navigate("/meals")} />
        <Heading size="lg" textAlign="center" flex={1}>Meal Recommendations</Heading>
        <Icon visibility="hidden" as={ChevronLeftIcon} w={10} h={10} />
      </Flex>
      <VStack spacing={5} align="stretch">
        <Text fontSize="xl" my={2}>
          For your goal of: Lean & Tone
        </Text>
        <Text fontSize="md" fontWeight="semibold">
          We recommend you try out the following meals:
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
            onClick={() => openMealDetails(rec)}
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
      {selectedMeal && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedMeal.name}</ModalHeader>
            <ModalCloseButton />
            <Image
              src={selectedMeal.imageUrl}
              alt={selectedMeal.name}
              objectFit="contain"
              width="100%"
              height="auto"
              maxH="50%"
              borderRadius="md"
              p="25px"
            />
            <ModalBody>
              <Text fontSize="md">{selectedMeal.description}</Text>
              <Text fontSize="sm" mt={3}><strong>Category:</strong> {selectedMeal.category}</Text>
              <Text fontSize="sm"><strong>Calories:</strong> {selectedMeal.calories}</Text>
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

export default MealRecommendationScreen;
