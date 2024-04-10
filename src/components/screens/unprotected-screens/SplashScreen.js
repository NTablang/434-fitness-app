import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function SplashScreen() {
  const navigate = useNavigate();

  // todo: reimplement auth function
  // Look at AuthProvider.js for reference
  

  return (
    <div className="w-screen h-screen overflow-hidden splash-bg flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl font-semibold tracking-tight">Theranos</h1>
      <div className="opacity-50">Fitness made simple</div>
      <Button colorScheme="twitter" size="lg" onClick={() =>  navigate("/register")}>
        Register
      </Button>
      <Button colorScheme="twitter" size="lg" onClick={() => navigate("/login")}>
        Log In
      </Button>
    </div>
  );
}

export default SplashScreen;
