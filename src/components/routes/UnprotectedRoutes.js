import React from "react";
import { Route, Routes } from "react-router-dom";
import SplashScreen from "../screens/unprotected-screens/SplashScreen";
import LoginScreen from "../screens/unprotected-screens/LoginScreen";
import RegisterScreen from "../screens/unprotected-screens/RegisterScreen";
import OnboardingOneScreen from "../screens/unprotected-screens/register/OnboardingOneScreen";
import OnboardingTwoScreen from "../screens/unprotected-screens/register/OnboardingTwoScreen";

function UnprotectedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      {/* onboarding screens */}
      <Route path="/onboarding-one" element={<OnboardingOneScreen />} />
      <Route path="/onboarding-two" element={<OnboardingTwoScreen />} />

    </Routes>
  );
}

export default UnprotectedRoutes;
