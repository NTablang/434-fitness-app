import { Box, Image, Text, Link, VStack, Button } from '@chakra-ui/react';
import minion from './minion.png';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  return (
    <Box className="App" textAlign="center">
      <VStack className="App-header" spacing={4} align="center" justify="center" minHeight="100vh" bg="gray.800" color="white">
        <Image src={minion} boxSize="40vmin" alt="logo" />
        <Text fontSize="xl">
          433 Project - Fitness App
        </Text>
        <Link fontSize="md" href="#" isExternal>
          Spring 2024
        </Link>
        <Button colorScheme="teal" size="lg" onClick={() => {
          alert('Hello World!');
          navigate("/about");
        }}>
          About Us
        </Button>
      </VStack>
    </Box> 
  );
}

export default App;
