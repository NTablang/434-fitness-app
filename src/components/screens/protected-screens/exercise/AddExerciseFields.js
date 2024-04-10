import React, { useState } from 'react';
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

const SelectFields = () => {
    const [selectedFields, setSelectedFields] = useState([]);
    const navigate = useNavigate();

    const fields = [
        'Sweat Amount',
        'Feeling During Workout',
        'Feeling Post-Workout',
        'Additional Notes',
    ];

    const handleFieldSelect = (field) => {
        if (selectedFields.includes(field)) {
            setSelectedFields(selectedFields.filter((f) => f !== field));
        } else {
            setSelectedFields([...selectedFields, field]);
        }
    };

    const handleAddFields = () => {
        console.log('Adding selected fields:', selectedFields);
        navigate('/exercise/add', { state: { selectedFields } });
    };

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

export default SelectFields;