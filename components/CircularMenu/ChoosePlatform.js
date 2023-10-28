"use client";

//*Internal imports */
import Image from "next/image";
import { useState } from "react";

//*External imports */
import classNames from "classnames";

//*redux */
import {
  clearSelection,
  setSelectedPlatforms,
} from "@/Redux/slices/CircularMenuSlice";
import { useDispatch } from "react-redux";

const ChoosePlatforms = () => {
  const [platforms, setPlatforms] = useState([]);
  const dispatch = useDispatch();

  const updatePlatforms = (platform) => {
    const index = platforms.indexOf(platform);

    if (index !== -1) {
      // if platform exists in the state, remove it
      const newArray = platforms
        .slice(0, index)
        .concat(platforms.slice(index + 1));
      setPlatforms(newArray);
    } else {
      // if platform doesn't exist in the state, add it
      setPlatforms([...platforms, platform]);
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className="relative flex flex-wrap gap-[22px] w-[951px] min-h-[660px] p-[50px] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]"
    >
      <div
        onClick={() => {
          updatePlatforms("facebook");
        }}
        className={classNames(
          "w-[269px] cursor-pointer flex items-center justify-center h-[269px]  border-[1px] rounded-lg hover:border-woro-blue hover:border-solid border-black",
          {
            "border-woro-blue border-solid": platforms?.includes("facebook"),
            "border-dashed": !platforms?.includes("facebook"),
          }
        )}
      >
        <div className="flex flex-col items-center font-bold text-[18px] gap-2">
          <Image
            src="/assets/images/dashboard/fb.png"
            alt="fb"
            width="43"
            height="43"
          />
          <h6>Facebook</h6>
        </div>
      </div>

      <div
        onClick={() => {
          updatePlatforms("youtube");
        }}
        className={classNames(
          "w-[269px] cursor-pointer flex items-center justify-center h-[269px]  border-[1px] rounded-lg hover:border-woro-blue hover:border-solid border-black",
          {
            "border-woro-blue border-solid": platforms?.includes("youtube"),
            "border-dashed": !platforms?.includes("youtube"),
          }
        )}
      >
        <div className="flex flex-col items-center font-bold text-[18px] gap-2">
          <Image
            src="/assets/images/dashboard/youtube.png"
            alt="fb"
            width="43"
            height="43"
          />
          <h6>Youtube</h6>
        </div>
      </div>

      <div
        onClick={() => {
          updatePlatforms("instagram");
        }}
        className={classNames(
          "w-[269px] cursor-pointer flex items-center justify-center h-[269px]  border-[1px] rounded-lg hover:border-woro-blue hover:border-solid border-black",
          {
            "border-woro-blue border-solid": platforms?.includes("instagram"),
            "border-dashed": !platforms?.includes("instagram"),
          }
        )}
      >
        <div className="flex flex-col items-center font-bold text-[18px] gap-2">
          <Image
            src="/assets/images/dashboard/instagram.png"
            alt="fb"
            width="43"
            height="43"
          />
          <h6>Instagram</h6>
        </div>
      </div>

      <div
        onClick={() => {
          updatePlatforms("linkedIn");
        }}
        className={classNames(
          "w-[269px] cursor-pointer flex items-center justify-center h-[269px]  border-[1px] rounded-lg hover:border-woro-blue hover:border-solid border-black",
          {
            "border-woro-blue border-solid": platforms?.includes("linkedIn"),
            "border-dashed": !platforms?.includes("linkedIn"),
          }
        )}
      >
        <div className="flex flex-col items-center font-bold text-[18px] gap-2">
          <Image
            src="/assets/images/dashboard/linkedIn.png"
            alt="LinkedIn"
            width="43"
            height="43"
          />
          <h6>LinkedIn</h6>
        </div>
      </div>

      {/* back btn */}
      <button
        title="Back to menu"
        onClick={() => {
          dispatch(clearSelection());
        }}
        className="absolute cursor-pointer top-2 left-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </button>

      {/* proceed btn */}
      <button
        onClick={() => {
          dispatch(setSelectedPlatforms({ platforms }));
        }}
        title={platforms.length ? "Click to proceed" : "Choose to proceed"}
        disabled={!platforms.length}
        className="cursor-pointer disabled:cursor-not-allowed absolute bottom-[50px] right-[50px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className={classNames(" w-12 h-12", {
            "stroke-woro-blue": platforms.length,
            "stroke-[#6d6d6d]": !platforms.length,
          })}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      
    </div>
  );
};

export default ChoosePlatforms;
