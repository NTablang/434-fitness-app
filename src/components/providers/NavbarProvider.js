import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";
import { NAVBAR_ROUTES } from "../../util/constants";

function NavbarProvider({ children }) {
  const navigate = useNavigate();
  return (
    <Flex direction="column" h="100vh">
      <Box flex="1">{children}</Box>
      <Flex
        as="nav"
        align="center"
        justify="space-around"
        wrap="wrap"
        padding="1rem"
        bg="gray.100"
        borderColor="gray.200"
        borderTopWidth={1}
      >
        {NAVBAR_ROUTES.map((route, index) => (
          <Button
            key={index}
            onClick={() => navigate(route.path)}
            variant="ghost"
          >
            {route.name}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
}

export default NavbarProvider;