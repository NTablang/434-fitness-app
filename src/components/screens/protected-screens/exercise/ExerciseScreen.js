import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ExerciseScreen() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      ExerciseScreen
      <Button colorScheme="twitter" size="lg" onClick={handleSignOut}>
        Logout
      </Button>
    </div>
  );
}

export default ExerciseScreen;
