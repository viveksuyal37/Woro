"use client";

import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

import questionnaire from "@/constants/onboardingQuestionnarie";
import { useRouter } from "next/navigation";

const OnBoardingQuestions = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const { push } = useRouter();

  const [menuData, setMenuData] = useState({
    isHovered: false,
    q1: null,
    q2: null,
    q3: null,
  });

  useEffect(() => {
    if (questionIndex === 3) push("/dashboard");
  }, [questionIndex]);

  return (
    <section className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-purple-50 to-purple-300">
      {/*  circle */}
      {questionIndex < 3 && (
        <div
          style={{
            background:
              " linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
          }}
          className=" border-[1px] relative border-white  flex items-center justify-center   w-[520px] h-[520px] 2xl:w-[744px] 2xl:h-[744px] rounded-full bg-white child:text-center  child:leading-tight"
        >
          {/* inner circle */}
          <div
            className={classNames(
              "flex justify-center items-center z-10 w-[233px] 2xl:w-[334px] h-[233px] 2xl:h-[334px] p-10 rounded-full bg-white shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]",
              { "border-woro-blue border-[2px]": menuData.isHovered }
            )}
          >
            <div className="flex min-h-[150px]  2xl:min-h-[220px] leading-tight flex-col text-[9px] 2xl:text-[14px] max-w-[200px] items-center justify-between">
              <div className="flex flex-col items-center gap-3 text-center">
                <h2 className="font-bold text-[12px] 2xl:text-[18px] text-woro-blue">
                  {questionnaire[questionIndex]?.question}
                </h2>
                <p>{questionnaire[questionIndex]?.desc}</p>
              </div>
            </div>
          </div>

          {/* menu items */}

          <div
            onMouseEnter={() => {
              setMenuData({ ...menuData, isHovered: true });
            }}
            onMouseLeave={() => {
              setMenuData({ ...menuData, isHovered: false });
            }}
            onClick={() => {
              setQuestionIndex(questionIndex + 1);
            }}
            className="group cursor-pointer hover:text-woro-blue hover:scale-125 transition-all duration-300 ease-linear  absolute top-[50px]  flex flex-col items-center gap-[6px] w-[100px] 2xl:w-[185px]"
          >
            <Image
              className="w-10 h-10 2xl:w-16 2xl:h-16"
              src={questionnaire[questionIndex]?.options[0].iconUrl}
              width="64"
              height="64"
              alt="logo"
            ></Image>

            <p className="font-bold text-[12px] 2xl:text-[18px]">
              {questionnaire[questionIndex]?.options[0].title}
            </p>
          </div>

          <div
            onMouseEnter={() => {
              setMenuData({ ...menuData, isHovered: true });
            }}
            onMouseLeave={() => {
              setMenuData({ ...menuData, isHovered: false });
            }}
            onClick={() => {
              setQuestionIndex(questionIndex + 1);
            }}
            className=" group cursor-pointer hover:text-woro-blue hover:scale-125 transition-all duration-300 ease-linear   absolute top-[161px] 2xl:top-[184px] right-[35px] 2xl:right-[55px]  flex flex-col items-center gap-[6px]  w-[100px] 2xl:w-[185px]"
          >
            <Image
              className="w-10 h-10 2xl:w-16 2xl:h-16"
              src={questionnaire[questionIndex]?.options[1].iconUrl}
              width="64"
              height="64"
              alt="logo"
            ></Image>
            <p className="font-bold text-[12px] 2xl:text-[18px]">
              {questionnaire[questionIndex]?.options[1].title}
            </p>
          </div>

          <div
            onMouseEnter={() => {
              setMenuData({ ...menuData, isHovered: true });
            }}
            onMouseLeave={() => {
              setMenuData({ ...menuData, isHovered: false });
            }}
            onClick={() => {
              setQuestionIndex(questionIndex + 1);
            }}
            className="group cursor-pointer hover:text-woro-blue  hover:scale-125 transition-all duration-300 ease-linear  absolute top-[324px] 2xl:top-[455px] right-[46px] 2xl:right-[56px] flex flex-col items-center gap-[6px] w-[100px] 2xl:w-[185px]"
          >
            <Image
              className="w-10 h-10 2xl:w-16 2xl:h-16"
              src={questionnaire[questionIndex]?.options[2].iconUrl}
              width="64"
              height="64"
              alt="logo"
            ></Image>
            <p className="font-bold text-[12px] 2xl:text-[18px]">
              {questionnaire[questionIndex]?.options[2].title}
            </p>
          </div>

          <div
            onMouseEnter={() => {
              setMenuData({ ...menuData, isHovered: true });
            }}
            onMouseLeave={() => {
              setMenuData({ ...menuData, isHovered: false });
            }}
            onClick={() => {
              setQuestionIndex(questionIndex + 1);
            }}
            className="group cursor-pointer hover:text-woro-blue  hover:scale-125 transition-all duration-300 ease-linear  absolute bottom-[46px] right-[213px] 2xl:right-[296px] flex flex-col items-center gap-[6px]  w-[100px] 2xl:w-[185px]"
          >
            <Image
              className="w-10 h-10 2xl:w-16 2xl:h-16"
              src={questionnaire[questionIndex]?.options[3].iconUrl}
              width="64"
              height="64"
              alt="logo"
            ></Image>
            <p className="font-bold text-[12px] 2xl:text-[18px]">
              {questionnaire[questionIndex]?.options[3].title}
            </p>
          </div>

          <div
            onMouseEnter={() => {
              setMenuData({ ...menuData, isHovered: true });
            }}
            onMouseLeave={() => {
              setMenuData({ ...menuData, isHovered: false });
            }}
            onClick={() => {
              setQuestionIndex(questionIndex + 1);
            }}
            className="group cursor-pointer hover:text-woro-blue  hover:scale-125 transition-all duration-300 ease-linear absolute top-[324px] 2xl:top-[455px] left-[46px] 2xl:left-[61px] flex flex-col items-center gap-[6px]  w-[100px] 2xl:w-[185px] "
          >
            <Image
              className="w-10 h-10 2xl:w-16 2xl:h-16"
              src={questionnaire[questionIndex]?.options[4].iconUrl}
              width="64"
              height="64"
              alt="logo"
            ></Image>
            <p className="font-bold text-[12px] 2xl:text-[18px]">
              {questionnaire[questionIndex]?.options[4].title}
            </p>
          </div>

          <div
            onMouseEnter={() => {
              setMenuData({ ...menuData, isHovered: true });
            }}
            onMouseLeave={() => {
              setMenuData({ ...menuData, isHovered: false });
            }}
            onClick={() => {
              setQuestionIndex(questionIndex + 1);
            }}
            className="group cursor-pointer hover:text-woro-blue  hover:scale-125 transition-all duration-300 ease-linear  absolute top-[165px] 2xl:top-[197px] left-[37px] 2xl:left-[53px] flex flex-col items-center gap-[6px]  w-[100px] 2xl:w-[185px]"
          >
            <Image
              className="w-10 h-10 2xl:w-16 2xl:h-16"
              src={questionnaire[questionIndex]?.options[5].iconUrl}
              width="64"
              height="64"
              alt="logo"
            ></Image>
            <p className="font-bold text-[12px] 2xl:text-[18px]">
              {questionnaire[questionIndex]?.options[5].title}
            </p>
          </div>
          
        </div>
      )}
    </section>
  );
};

export default OnBoardingQuestions;
