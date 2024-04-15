import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import {
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  FormControl,
  FormLabel,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  Stack,
  Flex,
  Link,
  Select,
} from "@chakra-ui/react";
import { CalendarDaysIcon, XMarkIcon } from "@heroicons/react/24/outline";

const AddExerciseScreen = () => {
  const location = useLocation();
  const selectedFields = location.state?.selectedFields || [];
  const [selectedTab, setSelectedTab] = useState("cardio");
  const [exerciseName, setExerciseName] = useState("");
  const [distance, setDistance] = useState("");
  const [intensity, setIntensity] = useState(75);
  const [weightExerciseName, setWeightExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [weight, setWeight] = useState("");
  const [recoveryTime, setRecoveryTime] = useState("");
  const [recoveryTimeUnit, setRecoveryTimeUnit] = useState("Minutes");
  const navigate = useNavigate();
  const toast = useToast();

  const [sweatAmount, setSweatAmount] = useState("");
  const [feelingDuringWorkout, setFeelingDuringWorkout] = useState("");
  const [feelingPostWorkout, setFeelingPostWorkout] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const fieldMapping = {
    "Sweat Amount (1-100)": {
      value: sweatAmount,
      setter: setSweatAmount,
    },
    "Feeling During Workout (1-100)": {
      value: feelingDuringWorkout,
      setter: setFeelingDuringWorkout,
    },
    "Feeling Post-Workout (1-100)": {
      value: feelingPostWorkout,
      setter: setFeelingPostWorkout,
    },
    "Additional Notes": {
      value: additionalNotes,
      setter: setAdditionalNotes,
    },
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleSave = () => {
    console.log("saving exercise data");
    // save new exercise in local storage by getting existing exercises and adding new one
    localStorage.getItem("exercises") ||
      localStorage.setItem("exercises", JSON.stringify([]));
    const exercises = JSON.parse(localStorage.getItem("exercises"));
    exercises.push({
      name: exerciseName,
      distance,
      intensity,
      weight,
      sets,
      repetitions,
      recoveryTime,
      recoveryTimeUnit,
      sweatAmount,
      feelingDuringWorkout,
      feelingPostWorkout,
      additionalNotes,
    });
    localStorage.setItem("exercises", JSON.stringify(exercises));

    toast({
      title: "Exercise Created",
      description: "Your exercise has been created successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/exercise");
  };

  return (
    <Box maxW="lg" mx="auto" p={4}>
      <div className="flex items-center gap-4">
        <XMarkIcon
          onClick={() => {
            navigate("/exercise");
          }}
          className="w-8 h-auto"
        />
        <Heading
          as="h2"
          size="xl"
          mb={2}
          className="mt-1 ml-28 font-[Poppins] tracking-tight"
        >
          Add Exercise
        </Heading>
      </div>
      <div className="flex items-center gap-2">
        <CalendarDaysIcon className="w-6 h-auto opacity-55" />
        <Text fontSize="md" color="gray.500" mb={4} mt={4}>
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>
      </div>
      <Tabs
        isFitted
        onChange={handleTabChange}
        border={0}
        borderColor={"transparent"}
      >
        <TabList mb={4}>
          <Tab>CARDIO</Tab>
          <Tab>WEIGHTS</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Heading as="h3" size="lg" mb={4}>
              Cardio Details
            </Heading>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Name of Exercise</FormLabel>
                <Input
                  type="text"
                  value={exerciseName}
                  onChange={(e) => setExerciseName(e.target.value)}
                  placeholder="Swimming"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Distance (mi)</FormLabel>
                <Input
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Intensity</FormLabel>
                <Slider
                  aria-label="intensity"
                  value={intensity}
                  onChange={(value) => setIntensity(value)}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text fontSize="sm" color="gray.500">
                  {intensity}%
                </Text>
              </FormControl>
            </Stack>
          </TabPanel>
          <TabPanel>
            <Heading as="h3" size="lg" mb={4}>
              Workout Details
            </Heading>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Name of Exercise</FormLabel>
                <Input
                  type="text"
                  value={weightExerciseName}
                  onChange={(e) => setWeightExerciseName(e.target.value)}
                  placeholder="Bench Press"
                />
              </FormControl>
              <Flex>
                <FormControl mr={4}>
                  <FormLabel>Number of Sets</FormLabel>
                  <Input
                    type="number"
                    value={sets}
                    onChange={(e) => setSets(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Repetitions</FormLabel>
                  <Input
                    type="number"
                    value={repetitions}
                    onChange={(e) => setRepetitions(e.target.value)}
                  />
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel>Weight (lbs.)</FormLabel>
                <Input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </FormControl>
              <Flex alignItems="flex-end">
                <FormControl mr={4}>
                  <FormLabel>Recovery Time</FormLabel>
                  <Input
                    type="number"
                    value={recoveryTime}
                    onChange={(e) => setRecoveryTime(e.target.value)}
                  />
                </FormControl>
                <FormControl width="180px">
                  <Select
                    value={recoveryTimeUnit}
                    onChange={(e) => setRecoveryTimeUnit(e.target.value)}
                  >
                    <option value="Minutes">Minutes</option>
                    <option value="Seconds">Seconds</option>
                  </Select>
                </FormControl>
              </Flex>
            </Stack>
          </TabPanel>
          {selectedFields.map((field) => {
            const { value, setter } = fieldMapping[field];

            return (
              <FormControl key={field}>
                <FormLabel>{field}</FormLabel>
                <Input
                  type="text"
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                />
              </FormControl>
            );
          })}
        </TabPanels>
      </Tabs>
      <Stack direction="row" justify="center" mt={8} borderColor="transparent">
        <Link
          fontSize="md"
          color="blue.500"
          fontWeight="medium"
          _hover={{ textDecoration: "underline" }}
          cursor="pointer"
          onClick={() => navigate("/exercise/add/fields")}
        >
          Add fields
        </Link>
      </Stack>

      <Stack direction="row" justify="end" mt={8}>
        <Button colorScheme="blue" onClick={handleSave}>
          Save
        </Button>
      </Stack>
    </Box>
  );
};

export default AddExerciseScreen;
