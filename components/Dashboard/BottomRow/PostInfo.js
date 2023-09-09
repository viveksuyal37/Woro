"use client";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

const PostInfo = () => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div
      style={{
        background:
          " linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className="rounded-[11px] flex flex-col  p-[20px_18px] w-[22.1vw] max-w-[500px]"
    >
      <div className="flex justify-center gap-[22px] text-[18px] font-bold">
        <div className="relative">
          <h6
            onClick={() => setActiveItem(0)}
            className={classNames(
              "cursor-pointer transition-all duration-300 ease-in",
              {
                "text-woro-blue": activeItem === 0,
                "translate-y-[-4px]": activeItem === 0,
              }
            )}
          >
            Upcoming posts
          </h6>
          <div
            className={classNames(
              "bg-woro-blue h-[3px] w-full absolute bottom-[-9px] transition-opacity duration-300",
              {
                "opacity-0": activeItem === 1,
              }
            )}
          ></div>
        </div>
        <div className="relative">
          <h6
            onClick={() => setActiveItem(1)}
            className={classNames(
              "cursor-pointer transition-all duration-300 ease-in",
              {
                "text-woro-blue": activeItem === 1,
                "translate-y-[-4px]": activeItem === 1,
              }
            )}
          >
            Previous posts
          </h6>
          <div
            className={classNames(
              "bg-woro-blue h-[3px] w-full absolute bottom-[-9px] transition-opacity duration-300",
              {
                "opacity-0": activeItem === 0,
              }
            )}
          ></div>
        </div>
      </div>

      <div className="mt-4 text-[18px]">
        {["", ""].map((i, indx) => {
          //! add nanoid
          return (
            <div
              key={indx}
              className={classNames(
                " border-[#7F7789] p-[12px_2px] flex gap-[12px] items-center justify-between leading-tight",
                { "border-b-[1px]": indx !== 1 }
              )}
            >
              <Image
                alt=""
                src="/assets/images/dashboard/fb.png"
                width="41"
                height="41"
              />
              <p>
                <strong>Facebook</strong>
              </p>
              <p>20 Sep</p>
              <p>5 mins ago</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostInfo;
