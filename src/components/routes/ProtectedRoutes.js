import React from "react";
import { Route, Routes } from "react-router-dom";
import ExerciseScreen from "../screens/protected-screens/exercise/ExerciseScreen";
import MealScreen from "../screens/protected-screens/meals/MealScreen";
import ProfileScreen from "../screens/protected-screens/profile/ProfileScreen";
import AddExerciseScreen from "../screens/protected-screens/exercise/AddExerciseScreen";
import ExerciseRecommendationScreen from "../screens/protected-screens/exercise/ExerciseRecommendationScreen";
import AddMealScreen from "../screens/protected-screens/meals/AddMealScreen";
import MealRecommendationScreen from "../screens/protected-screens/meals/MealRecommendationScreen";
import AddExerciseFields from "../screens/protected-screens/exercise/AddExerciseFields";
import AddMealFields from "../screens/protected-screens/meals/AddMealFields";

function ProtectedRoutes() {
  return (
    <Routes>
      {/* exercise */}
      <Route path="/" element={<ExerciseScreen />} />
      <Route path="/exercise" element={<ExerciseScreen />} />
      {/* meals */}
      <Route path="/meals" element={<MealScreen />} />
      {/* profile */}
      <Route path="/profile" element={<ProfileScreen />} />

      {/* subpages */}
      <Route path="/exercise/add" element={<AddExerciseScreen />} />
      <Route path="/exercise/add/fields" element={<AddExerciseFields />} />
      <Route
        path="/exercise/recommendation"
        element={<ExerciseRecommendationScreen />}
      />
      <Route path="/meals/add" element={<AddMealScreen />} />
      <Route path="/meals/add/fields" element={<AddMealFields />} />
      <Route
        path="/meals/recommendation"
        element={<MealRecommendationScreen />}
      />
    </Routes>
  );
}

export default ProtectedRoutes;
