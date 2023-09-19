"use client";

/*BuiltIn imports */
import Image from "next/image";

/*redux */
import { useDispatch } from "react-redux";
import { toggleCard } from "@/Redux/slices/CardSlice";

const ExpandBtn = ({ cardId }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        cardId
          ? dispatch(toggleCard({ cardId }))
          : console.log("no cardId found!!");
      }}
      className="w-[22px] h-[22px] bg-[#454545] cursor-pointer flex items-center justify-center rounded-full "
    >
      <Image
        src="/assets/images/dashboard/expand.png"
        alt="expand button"
        width="12"
        height="12"
      />
    </div>
  );
};

export default ExpandBtn;
