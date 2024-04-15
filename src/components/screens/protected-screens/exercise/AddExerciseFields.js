import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Checkbox,
  Button,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const AddExerciseFields = () => {
  const [selectedFields, setSelectedFields] = useState([]);
  const navigate = useNavigate();

  const fields = [
    "Sweat Amount (1-100)",
    "Feeling During Workout (1-100)",
    "Feeling Post-Workout (1-100)",
    "Additional Notes",
  ];

  const handleFieldSelect = (field) => {
    if (selectedFields.includes(field)) {
      setSelectedFields(selectedFields.filter((f) => f !== field));
    } else {
      setSelectedFields([...selectedFields, field]);
    }
  };

  const handleAddFields = () => {
    console.log("Adding selected fields:", selectedFields);
    navigate("/exercise/add", { state: { selectedFields } });
  };

  useEffect(() => {
    const savedFields = JSON.parse(localStorage.getItem("savedData"));
    console.log("Saved fields from add:", savedFields);
    if (
      savedFields.sweatAmount ||
      savedFields.feelingDuringWorkout ||
      savedFields.feelingPostWorkout ||
      savedFields.additionalNotes
    ) {
      
      console.log("SWEAT AMOUNT", savedFields.sweatAmount);
        console.log("FEELING DURING WORKOUT", savedFields.feelingDuringWorkout);
        console.log("FEELING POST WORKOUT", savedFields.feelingPostWorkout);
        console.log("ADDITIONAL NOTES", savedFields.additionalNotes);

      if (savedFields.sweatAmount) {
        setSelectedFields([...selectedFields, "Sweat Amount (1-100)"]);
      }
        if (savedFields.feelingDuringWorkout) {
            setSelectedFields([...selectedFields, "Feeling During Workout (1-100)"]);
        }
        if (savedFields.feelingPostWorkout) {
            setSelectedFields([...selectedFields, "Feeling Post-Workout (1-100)"]);
        }
        if (savedFields.additionalNotes) {
            setSelectedFields([...selectedFields, "Additional Notes"]);
        }
        
    }
  }, []);

  const bgColor = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={8}
      p={6}
      bg={bgColor}
      borderWidth={1}
      borderColor={borderColor}
      borderRadius="lg"
      boxShadow="md"
    >
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Select Fields
      </Heading>
      <VStack align="start" spacing={4}>
        {fields.map((field) => (
          <Checkbox
            key={field}
            isChecked={selectedFields.includes(field)}
            onChange={() => handleFieldSelect(field)}
            size="lg"
            colorScheme="blue"
          >
            <Text fontSize="lg">{field}</Text>
          </Checkbox>
        ))}
      </VStack>
      <Button
        mt={8}
        colorScheme="blue"
        size="lg"
        w="full"
        onClick={handleAddFields}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddExerciseFields;
