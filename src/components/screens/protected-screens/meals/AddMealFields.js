import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Heading,
    Checkbox,
    Button,
    VStack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

const AddMealFields = () => {
    const [SelectMealFields, setSelectedFields] = useState([]);
    const navigate = useNavigate();

    const fields = [
        'Carbohydrates (g)',
        'Protein (g)',
        'Fat (g)',
        'Sodium (mg)',
        'Sugar (g)',
        'Additional Notes'
    ];

    const handleFieldSelect = (field) => {
        if (SelectMealFields.includes(field)) {
            setSelectedFields(SelectMealFields.filter((f) => f !== field));
        } else {
            setSelectedFields([...SelectMealFields, field]);
        }
    };

    const handleAddFields = () => {
        console.log('Adding selected fields:', SelectMealFields);
        navigate('/meals/add', { state: { selectedFields: SelectMealFields } });
    };

  useEffect(() => {
    const savedFields = JSON.parse(localStorage.getItem("savedData"));
    console.log("Saved fields from add:", savedFields);
    if (
      savedFields.carbs ||
      savedFields.protein ||
        savedFields.fat ||
        savedFields.sodium ||
        savedFields.sugar ||
        savedFields.additionalNotes
    ) {
      
        console.log("CARBS", savedFields.carbs);
        console.log("PROTEIN", savedFields.protein);
        console.log("FAT", savedFields.fat);
        console.log("SODIUM", savedFields.sodium);
        console.log("SUGAR", savedFields.sugar);
        console.log("ADDITIONAL NOTES", savedFields.additionalNotes);

        if (savedFields.carbs) {
            setSelectedFields([...SelectMealFields, 'Carbohydrates (g)']);
        }
        if (savedFields.protein) {
            setSelectedFields([...SelectMealFields, 'Protein (g)']);
        }
        if (savedFields.fat) {
            setSelectedFields([...SelectMealFields, 'Fat (g)']);
        }
        if (savedFields.sodium) {
            setSelectedFields([...SelectMealFields, 'Sodium (mg)']);
        }
        if (savedFields.sugar) {
            setSelectedFields([...SelectMealFields, 'Sugar (g)']);
        }
        if (savedFields.additionalNotes) {
            setSelectedFields([...SelectMealFields, 'Additional Notes']);
        }
        
        
    }
  }, []);


    const bgColor = useColorModeValue('white', 'gray.700');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

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
                        isChecked={SelectMealFields.includes(field)}
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

export default AddMealFields;