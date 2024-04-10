import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, Flex, VStack, Text } from '@chakra-ui/react';
import { FaRunning, FaUtensils, FaUser } from 'react-icons/fa';
import { NAVBAR_ROUTES } from '../../util/constants';

function NavbarProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const getIconForRoute = (routeName) => {
    switch (routeName) {
      case 'Exercise':
        return FaRunning;
      case 'Meals':
        return FaUtensils;
      case 'Profile':
        return FaUser;
      default:
        return FaUser;
    }
  };

  return (
    <Flex direction="column" h="100vh">
      <Box flex="1">{children}</Box>
      <Flex
        as="nav"
        align="center"
        justify="space-around"
        wrap="wrap"
        padding="1rem"
        bg="gray.50"
        borderColor="gray.200"
        borderTopWidth={2}
        boxShadow="sm"
      >
        {NAVBAR_ROUTES.map((route, index) => {
          const IconComponent = getIconForRoute(route.name);
          const isActive = location.pathname === route.path;
          return (
            <VStack key={index} spacing={2} onClick={() => {
              navigate(route.path);
            }}>
              <Box as={IconComponent} size="24px" color={isActive ? "blue.500" : "currentcolor"} />
              <Text fontSize="sm" colorScheme={isActive ? "blue" : "gray"}>{route.name}</Text>
            </VStack>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default NavbarProvider;
