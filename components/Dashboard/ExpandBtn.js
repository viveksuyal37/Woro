"use client";

/*BuiltIn imports */
import Image from "next/image";
import { useEffect, useState } from "react";

/*redux */
import { useDispatch } from "react-redux";
import { toggleCard } from "@/Redux/slices/CardSlice";
import classNames from "classnames";

const ExpandBtn = ({ cardId }) => {
  const [isCurrentItemExpanded, setIsCardItemExpanded] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        cardId
          ? (dispatch(toggleCard({ cardId })),
            setIsCardItemExpanded(!isCurrentItemExpanded))
          : console.log("no cardId found!!");
      }}
      className={classNames(
        "w-4 2xl:w-[22px] h-4 2xl:h-[22px]  cursor-pointer flex items-center justify-center rounded-full ",
        { "bg-[#7F7789]": !isCurrentItemExpanded }
      )}
    >
      {isCurrentItemExpanded && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="arrows">
          <path d="M11.29,9.71a1,1,0,0,0,1.42,0l5-5a1,1,0,1,0-1.42-1.42L12,7.59,7.71,3.29A1,1,0,0,0,6.29,4.71Zm1.42,4.58a1,1,0,0,0-1.42,0l-5,5a1,1,0,0,0,1.42,1.42L12,16.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
        </svg>
      )}

      {!isCurrentItemExpanded && (
        <Image
          src="/assets/images/dashboard/expand.png"
          alt="expand button"
          width="12"
          height="12"
          className="w-2 h-2 2xl:w-3 2xl:h-3"
        />
      )}
    </div>
  );
};

export default ExpandBtn;
