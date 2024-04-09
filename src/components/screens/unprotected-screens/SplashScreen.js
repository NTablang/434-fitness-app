import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function SplashScreen() {
  const navigate = useNavigate();

  // todo: reimplement auth function
  // Look at AuthProvider.js for reference

  const handleAuth = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Minion Steinberg",
        pictureUrl:
          "https://media.licdn.com/dms/image/D4D03AQGVxTGgiZ1RoA/profile-displayphoto-shrink_400_400/0/1695769437400?e=1718236800&v=beta&t=TylJc1WHlDig7Hjrg8LAt4JqHhyxudZhBJH6QoMLIVI",
      })
    );

    navigate("/");
  };

  return (
    <div className="w-screen h-screen overflow-hidden splash-bg flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl font-semibold tracking-tight">Theranos</h1>
      <div className="opacity-50">Fitness made simple</div>
      <Button colorScheme="twitter" size="lg" onClick={handleAuth}>
        Register
      </Button>
      <Button colorScheme="twitter" size="lg" onClick={handleAuth}>
        Log In
      </Button>
    </div>
  );
}

export default SplashScreen;
