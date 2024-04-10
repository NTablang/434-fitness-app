import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OnboardingTwoScreen() {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [focusedGoal, setFocusedGoal] = useState(null);

  useEffect(() => {
    // get user state from previous screen
    const userState = location.state;
    setUser(userState);
  }, [location]);

  return (
    <div className="w-screen h-screen overflow-hidden splash-bgg flex flex-col pt-8 items-center gap-10 px-16">
      <div className="text-2xl ">
        <div className="flex items-center flex-col">
          <div className="font-bold font-[Poppins]">Tell us your goals!</div>
          <div className="font-[300] font-[Poppins] mt-3 opacity-70 text-base">
            It will help us to choose a best program for you
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-10">
        <div
          onClick={() => setFocusedGoal("Lean")}
          className={`h-[35vh] w-[44vw] rounded-[2rem] bg-opacity-50 flex items-center flex-col pt-4 ${
            focusedGoal === "Lean" ? "blue-bg" : "blue-bg-faint"
          }`}
        >
          <img
            src={"/Lean.png"}
            alt="Lean"
            className="w-[50%] h-auto font-[Poppins] rounded-[2rem]"
          />
          <div className="font-[800] mt-4 text-white font-[Poppins]">
            Lean & Tone
          </div>
          <div className="text-white text-sm text-center px-4 mt-4 font-[Poppins]">
            I&apos;m “skinny fat.” I look thin but have no defintion. I want to
            add lean muscle in the right way
          </div>
        </div>

        <div
          onClick={() => setFocusedGoal("Run")}
          className={`h-[35vh] w-[44vw] rounded-[2rem] bg-opacity-50 flex items-center flex-col pt-4 ${
            focusedGoal === "Run" ? "blue-bg" : "blue-bg-faint"
          }`}
        >
          <img
            src={"/Run.png"}
            alt="Lean"
            className="w-[50%] h-auto font-[Poppins] rounded-[2rem]"
          />
          <div className="font-[800] mt-4 text-white font-[Poppins]">
            Lose Fat
          </div>
          <div className="text-white text-sm text-center px-4 mt-4 font-[Poppins]">
            I want to lose fat and drop the number on the scale.
          </div>
        </div>
      </div>

      <div
        onClick={() => setFocusedGoal("Lift")}
        className={`h-[35vh] w-[44vw] rounded-[2rem] bg-opacity-50 flex items-center flex-col pt-4 ${
          focusedGoal === "Lift" ? "blue-bg" : "blue-bg-faint"
        }`}
      >
        <img
          src={"/Lift.png"}
          alt="Lean"
          className="w-[50%] h-auto font-[Poppins] rounded-[2rem]"
        />
        <div className="font-[800] mt-4 text-white font-[Poppins]">Bulk Up</div>
        <div className="text-white text-sm text-center px-4 mt-4 font-[Poppins]">
          I want to get bigger and stronger. I want to gain as much size as
          possible.
        </div>
      </div>

      <div
        colorScheme="twitter"
        className={`!text-2xl !px-16 !py-4 text-white font-[700] tracking-tight !rounded-full blue-bg cursor-pointer ${
          focusedGoal == null ? "opacity-50" : "opacity-100"
        } ${focusedGoal == null ? "!pointer-events-none !opacity-50" : ""}`}
        onClick={() => {
          if (focusedGoal == null) {
            return;
          }

          localStorage.setItem(
            "user",
            JSON.stringify({
              ...user,
              goal: focusedGoal,
            })
          );
          navigate("/");
        }}
      >
        Confirm
      </div>
    </div>
  );
}

export default OnboardingTwoScreen;
