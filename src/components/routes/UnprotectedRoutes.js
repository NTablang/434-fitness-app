import React from "react";
import { Route, Routes } from "react-router-dom";
import SplashScreen from "../screens/unprotected-screens/SplashScreen";
import LoginScreen from "../screens/unprotected-screens/LoginScreen";
import RegisterScreen from "../screens/unprotected-screens/RegisterScreen";

function UnprotectedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
    </Routes>
  );
}

export default UnprotectedRoutes;
