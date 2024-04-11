import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function SplashScreen() {
  const navigate = useNavigate();

  // todo: reimplement auth function
  // Look at AuthProvider.js for reference

  const CustomButton = ({ onClick, label }) => {
    return (
      <div
        colorScheme="twitter"
        className={`!text-2xl !px-16 !py-4 text-white font-[700] tracking-tight !rounded-full blue-bg cursor-pointer `}
        onClick={onClick}
      >
        {label}
      </div>
    );
  };

  return (
    <div className="w-screen h-screen overflow-hidden splash-bg flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl font-semibold tracking-tight">Theranos</h1>
      <div className="opacity-50">Fitness made simple</div>

      <CustomButton onClick={() => navigate("/register")} label="Register" />
      <CustomButton onClick={() => navigate("/login")} label="Log In" />
    </div>
  );
}

export default SplashScreen;
