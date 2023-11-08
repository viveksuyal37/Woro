"use client";

/**BuiltIn Imports */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**External Imports */
import { nanoid } from "nanoid";

/**Custom components */
import UgcCard from "../dashboard/UGC/UgcCard";

const page = () => {
  const [randomNo, setRandomNo] = useState(Math.floor(Math.random() * 10));
  return (
    <div
      style={{ background: "0px_4px_20px_0px_rgba(190,_148,_243,_0.20)" }}
      className="bg-white rounded-[10px] w-full h-full overflow-auto p-10 2xl:p-[68px]"
    >
      {/* top */}
      <div className="flex gap-7 2xl:gap-[35px]">
        <div className="w-[85px] 2xl:w-[131px]  rounded-full">
          <Image
            src="/assets/images/profile.png"
            width="131"
            height="131"
            alt="profile"
          />
        </div>
        <div className="flex flex-col gap-3 2xl:gap-[25px] ">
          <div>
            <h1 className="text-xl 2xl:text-[24px] font-bold">Vivek Suyal</h1>
            <p className="text-sm 2xl:text-[18px] text-woro-blue">Admin</p>
          </div>
          <button className="flex bg-woro-blue items-center gap-1 text-sm 2xl:text-[1rem] text-white p-[7px_16px] 2xl:p-[12px_25px] rounded-[3px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 2xl:w-6 2xl:h-6"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"
                fill="white"
              />
            </svg>
            Edit profile
          </button>
        </div>
      </div>

      {/* mid */}
      <div className="grid grid-cols-2 2xl:grid-cols-3 gap-8 2xl:gap-[46px] justify-between w-full my-[46px]">
        <div className="min-w-[328px]">
          <label className="block mb-3 2xl:mb-[20px] text-[1rem] font-bold">
            Name
          </label>
          <input
            placeholder="vivek"
            type="text"
            className="w-full p-[13px_14px] h-10 2xl:h-[46px] border border-[#B6B6B6]"
          ></input>
        </div>

        <div className="min-w-[328px]">
          <label className="block mb-3 2xl:mb-[20px] text-[1rem] font-bold">
            Last name
          </label>
          <input
            placeholder="suyal"
            type="text"
            className="w-full p-[13px_14px] h-10 2xl:h-[46px] border border-[#B6B6B6]"
          ></input>
        </div>

        <div className="min-w-[328px]">
          <label className="block mb-3 2xl:mb-[20px] text-[1rem] font-bold">
            Email
          </label>
          <input
            placeholder="example@gmail.com"
            type="text"
            className="w-full p-[13px_14px] h-10 2xl:h-[46px] border border-[#B6B6B6]"
          ></input>
        </div>

        <div className="min-w-[328px]">
          <label className="block mb-3 2xl:mb-[20px] text-[1rem] font-bold">
            Mobile no
          </label>
          <input
            placeholder="123456789"
            type="text"
            className="w-full p-[13px_14px] h-10 2xl:h-[46px] border border-[#B6B6B6]"
          ></input>
        </div>
      </div>

      {/* portfolio */}
      <h2 className="text-xl font-bold xl:text-2xl">Your Portfolio</h2>
      {/* if empty/non-empty */}
      {randomNo % 2 === 0 ? (
        <div className="flex flex-col items-center justify-center gap-[22px]">
          <div className="flex items-center  text-[#C1C1C1] font-bold flex-col gap-[6px]">
            <Image
              src="/assets/images/portfolio/empty-folder.png"
              className="w-[100px] 2xl:w-[138px]"
              width="138"
              height="138"
              alt="empty"
            />
            <p>This place looks empty ...</p>
          </div>
          <Link
            href="/account/create-portfolio"
            className="flex bg-woro-blue text-sm 2xl:text-[1rem] items-center gap-1 text-white p-[7px_16px] 2xl:p-[12px_25px] rounded-[3px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 2xl:w-6 2xl:h-6"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.7004 10.6999V2.8999H13.3004V10.6999H21.1004V13.2999H13.3004V21.0999H10.7004V13.2999H2.90039V10.6999H10.7004Z"
                fill="white"
              />
            </svg>
            Create Portfolio
          </Link>
        </div>
      ) : (
        <div>
          <Link
            href="/account/create-portfolio"
            className=" w-max text-sm 2xl:text-[1rem] flex mt-[22px] bg-woro-blue items-center gap-1 text-white p-[7px_1rem] 2xl:p-[12px_25px] rounded-[3px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 2xl:w-6 2xl:h-6"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"
                fill="white"
              />
            </svg>
            Edit portfolio
          </Link>

          {/* linked socials */}
          <div className="font-bold space-y-[22px] mt-[46px]">
            <h5>Linked Socials</h5>
            <div className="flex flex-wrap child:text-[14px] font-bold gap-[22px] child:p-[17px_20px] child:rounded-[20px] child:shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] child:max-w-[160px] child:2xl:max-w-[175px] child:max-h-[90px] child:2xl:max-h-[94px]">
              {/* linked accounts to be mapped from an state */}
              <div className=" flex items-center gap-[10px]   ">
                <Image
                  src="/assets/images/dashboard/linkedIn.png"
                  width="36"
                  height="36"
                  className="w-7 2xl:w-9"
                  alt="linkedIn"
                />
                <p>Linked</p>
              </div>
              {/* add socials */}
              <div className="flex border-dashed border-black border text-[#7F7789] flex-col items-center gap-1 2xl:gap-2 text-[14px]">
                <div className="bg-woro-blue rounded-full flex items-center justify-center 2xl:w-[40px] w-8 h-8 2xl:h-[40px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 2xl:w-6 2xl:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10.7004 10.6999V2.8999H13.3004V10.6999H21.1004V13.2999H13.3004V21.0999H10.7004V13.2999H2.90039V10.6999H10.7004Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p>Add socials</p>
              </div>
            </div>
          </div>

          {/* your posts */}
          <div className="space-y-[46px] font-bold mt-[46px]">
            <h5>Your Posts</h5>
            {/* if has posts */}
            <div className="flex flex-wrap gap-[22px]">
              {["", "", ""].map(() => {
                return <UgcCard key={nanoid(4)} />;
              })}
            </div>
            {/* if empty */}
            <Link
              href="/account/create-portfolio/add-posts"
              className="w-full h-[60px] 2xl:h-[78px] flex  border border-dashed border-black items-center justify-center rounded-lg text-[#7F7789] gap-2"
            >
              <div className="bg-woro-blue  rounded-full flex items-center justify-center 2xl:w-[40px] w-8 h-8 2xl:h-[40px] text-sm 2xl:text-[1rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 2xl:w-6 2xl:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.7004 10.6999V2.8999H13.3004V10.6999H21.1004V13.2999H13.3004V21.0999H10.7004V13.2999H2.90039V10.6999H10.7004Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p>Add posts</p>
            </Link>
          </div>

          {/* your budget */}
          <div className="space-y-[22px] font-bold mt-[46px]">
            <h5>Your budget range</h5>
            <p className="text-woro-blue text-[18px]">₹40k - ₹60k</p>
            <p className="text-[#7F7789] text-[14px]">
              This is the rate through which your clients can find you
            </p>
          </div>

          {/* tags */}
          <div className="space-y-[22px] font-bold mt-[46px]">
            <h5>Product Tags</h5>
            <div className="text-woro-blue flex gap-[22px]">
              <span>Bags</span>
              <span>Watches</span>
              <span>Pets</span>
            </div>
            <p className="text-[#7F7789] text-[14px]">
              These are the product tags through which your clients can find you
            </p>
          </div>
        </div>
      )}

      {/* account upgrade btn */}
      <div className="grid text-sm 2xl:text-[1rem] grid-cols-2 mt-[46px] space-x-4 child:font-bold child:h-9 child:2xl:h-12">
        <button className="flex items-center justify-center gap-2 text-white bg-woro-blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 2xl:w-6 2xl:h-6"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M3.3048 5.20031L7.50408 7.99983L11.6903 2.13905C12.0113 1.68964 12.6359 1.58555 13.0853 1.90656C13.1751 1.9707 13.2536 2.04926 13.3178 2.13905L17.5041 7.99983L21.7033 5.20031C22.1629 4.89395 22.7837 5.01813 23.0901 5.47766C23.2218 5.67527 23.2789 5.91332 23.2512 6.1492L21.608 20.1167C21.5487 20.6203 21.1219 20.9998 20.6148 20.9998H4.39333C3.88625 20.9998 3.45943 20.6203 3.40018 20.1167L1.75695 6.1492C1.69242 5.6007 2.08476 5.10374 2.63326 5.03921C2.86914 5.01146 3.10719 5.06856 3.3048 5.20031ZM12.5041 14.9998C13.6086 14.9998 14.5041 14.1044 14.5041 12.9998C14.5041 11.8953 13.6086 10.9998 12.5041 10.9998C11.3995 10.9998 10.5041 11.8953 10.5041 12.9998C10.5041 14.1044 11.3995 14.9998 12.5041 14.9998Z"
              fill="white"
            />
          </svg>
          Upgrade to Company account
        </button>
        <button className="flex items-center justify-center border-[2px] border-woro-blue text-woro-blue">
          Change to Individual account
        </button>
      </div>
    </div>
  );
};

export default page;
