import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import {
  ArrowsUpDownIcon,
  CalendarDaysIcon,
  ScaleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

function OnboardingOneScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [formValues, setFormValues] = useState({
    gender: "",
    birthDate: "",
    weight: "",
    height: "",
  });
  const [touched, setTouched] = useState({
    gender: false,
    birthDate: false,
    weight: false,
    height: false,
  });

  useEffect(() => {
    // get user state from previous screen
    const userState = location.state;
    setUser(userState);
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const isError = {
    gender: touched.gender && !formValues.gender,
    birthDate: touched.birthDate && !formValues.birthDate,
    weight: touched.weight && !formValues.weight,
    height: touched.height && !formValues.height,
  };

  return (
    <div className="w-screen h-screen overflow-hidden splash-bgg flex flex-col pt-4 items-center gap-10 px-16">
      <img src={"/Splash.png"} alt="splash" className="w-1/3 h-auto" />
      <div className="text-2xl ">
        <div className="flex items-center flex-col">
          <div className="font-bold font-[Poppins]">
            Let's complete your profile
          </div>
          <div className="font-[300] font-[Poppins] mt-3 opacity-70 text-base">
            It will help us to know more about you!
          </div>
        </div>
      </div>
      <FormControl
        isInvalid={Object.values(isError).some((error) => error)}
        className="!gap-4 flex flex-col -mt-4"
      >
        <div className="bg-[#f2f2f2] flex items-center px-6 py-4 gap-4 rounded-lg">
          <UserGroupIcon className="w-8 h-8 text-gray-500" />
          <div className="w-full">
            <FormLabel>Choose Gender</FormLabel>
            <Select
              _placeholder={{ color: "gray.200" }}
              name="gender"
              placeholder="..."
              value={formValues.gender}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="w-full !border-0 !border-b-4 border-gray-900"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
            {isError.gender && (
              <FormErrorMessage>Gender is required.</FormErrorMessage>
            )}
          </div>
        </div>

        <div className="bg-[#f2f2f2] flex items-center px-6 py-4 gap-4 rounded-lg">
          <CalendarDaysIcon className="w-8 h-8 text-gray-500" />
          <div className="w-full">
            <FormLabel>Date of Birth</FormLabel>
            <Input
              name="birthDate"
              type="date"
              value={formValues.birthDate}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="w-full !border-0 !border-b-4 border-gray-900"
            />
            {isError.birthDate && (
              <FormErrorMessage>Date of Birth is required.</FormErrorMessage>
            )}
          </div>
        </div>

        <div className="bg-[#f2f2f2] flex items-center px-6 py-4 gap-4 rounded-lg">
          <ScaleIcon className="w-8 h-8 text-gray-500" />
          <div className="w-full">
            <FormLabel>Your Weight</FormLabel>
            <div className="flex justify-between items-center gap-4">
              <Input
                name="weight"
                type="number"
                value={formValues.weight}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className="w-full !border-0 !border-b-4 border-gray-900"
              />
              <div className="violet-bg flex p-4 text-white rounded-lg">
                LB.
              </div>
            </div>
            {isError.weight && (
              <FormErrorMessage>Weight is required.</FormErrorMessage>
            )}
          </div>
        </div>

        <div className="bg-[#f2f2f2] flex items-center px-6 py-4 gap-4 rounded-lg">
          <ArrowsUpDownIcon className="w-8 h-8 text-gray-500" />
          <div className="w-full">
            <FormLabel>Your Height</FormLabel>
            <div className="flex gap-4 justify-between items-center">
              <Input
                name="height"
                type="number"
                value={formValues.height}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className="w-full !border-0 !border-b-4 border-gray-900"
              />
              <div className="violet-bg flex p-4 text-white rounded-lg">
                FT.
              </div>
            </div>
            {isError.height && (
              <FormErrorMessage>Height is required.</FormErrorMessage>
            )}
          </div>
        </div>
      </FormControl>

      <div
        colorScheme="twitter"
        className={`!text-2xl !px-16 !py-4 text-white font-[700] tracking-tight !rounded-full blue-bg cursor-pointer ${
          Object.values(isError).some((error) => error)
            ? "opacity-50"
            : "opacity-100"
        } ${
          Object.values(touched).some((t) => !t)
            ? "!pointer-events-none !opacity-50"
            : ""
        }`}
        onClick={() => {
          if (
            Object.values(formValues).some((value) => value === "") ||
            Object.values(isError).some((error) => error)
          ) {
            return;
          }

          navigate("/onboarding-two", {
            state: {
              ...user,
              ...formValues,
            },
          });
        }}
      >
        Next
      </div>
    </div>
  );
}

export default OnboardingOneScreen;
