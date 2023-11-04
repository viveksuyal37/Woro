"use client";

import UserType from "@/components/OnBoarding/UserType";
import SignUp from "@/components/OnBoarding/SignUp";
import { useState } from "react";
import OnBoardingQuestions from "@/components/OnBoarding/OnBoardingQuestions";

const page = () => {
  const [onBoardingStep, setOnBoardingStep] = useState(1);

  switch (onBoardingStep) {
    case 1:
      return <SignUp setOnBoardingStep={setOnBoardingStep} />;
    case 2:
      return <UserType setOnBoardingStep={setOnBoardingStep} />;
    case 3:
      return <OnBoardingQuestions />;
  }
};

export default page;
