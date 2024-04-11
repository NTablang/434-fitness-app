import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import facebooklogo from "../../../facebook.png";
import googlelogo from "../../../google.png";

function LoginScreen() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const isError = {
    email: touched.email && formValues.email === "",
    password: touched.password && formValues.password === "",
  };

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

  const letIn = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        firstName: "Minion",
        lastName: "Steinberg",
        email: "minion.steinberg@terpmail.edu",
        password: "jason1234",
        pictureUrl:
          "https://media.licdn.com/dms/image/D4D03AQGVxTGgiZ1RoA/profile-displayphoto-shrink_400_400/0/1695769437400?e=1718236800&v=beta&t=TylJc1WHlDig7Hjrg8LAt4JqHhyxudZhBJH6QoMLIVI",
      })
    );

    navigate("/");
  };

  return (
    <div className="w-screen h-screen overflow-hidden splash-bgg flex flex-col pt-10 items-center gap-10 px-10">
      <div className="flex items-center flex-col text-3xl">
        <div>Hey There,</div>
        <div className="font-bold">Welcome Back</div>
      </div>
      <FormControl
        isInvalid={Object.values(isError).some((error) => error)}
        className="!gap-4 flex flex-col"
      >
        <div className="bg-[#f2f2f2] flex items-center px-6 py-4 gap-4 rounded-lg">
          <EnvelopeIcon className="w-8 h-8 text-gray-500" />
          <div className="w-full">
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="w-full !border-0 !border-b-4 border-gray-900"

            />
            {isError.email && (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </div>
        </div>

        <div className="bg-[#f2f2f2] flex items-center px-6 py-4 gap-4 rounded-lg">
          <LockClosedIcon className="w-8 h-8 text-gray-500" />
          <div className="w-full">
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="w-full !border-0 !border-b-4 border-gray-900"

            />
            {isError.password && (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
          </div>
        </div>
      </FormControl>

      <div className="flex flex-col items-center gap-4">
        <Button
          colorScheme="twitter"
          className="!text-2xl !px-14 !py-8 !rounded-full"
          
          onClick={() => {
            if (
              formValues.email.trim() === "" ||
              formValues.password.trim() === ""
            ) {
              return;
            }

            localStorage.setItem(
              "user",
              JSON.stringify({
                firstName: "Minion",
                lastName: "Steinberg",
                email: formValues.email,
                password: formValues.password,
                pictureUrl:
                  "https://media.licdn.com/dms/image/D4D03AQGVxTGgiZ1RoA/profile-displayphoto-shrink_400_400/0/1695769437400?e=1718236800&v=beta&t=TylJc1WHlDig7Hjrg8LAt4JqHhyxudZhBJH6QoMLIVI",
              })
            );

            navigate("/");
          }}
        >
          Login
        </Button>
        <div>or</div>
        <div className="flex gap-8">
          <Button
            className="flex px-4 py-8 !rounded-md !bg-transparent border"
            onClick={letIn}
          >
            <img
              src={facebooklogo}
              alt="Facebook Icon"
              className="w-8 h-auto"
            />
          </Button>
          <Button
            className="flex px-4 py-8 !rounded-md !bg-transparent border"
            onClick={letIn}
          >
            <img src={googlelogo} alt="Google Icon" className="w-8 h-auto" />
          </Button>
        </div>
        <div className="flex gap-1">
          <span>Don't have an account?</span>{" "}
          <span className="cursor-pointer" onClick={() => navigate("/register")}>
            <div className="text-[#C58BF2]">Register</div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
