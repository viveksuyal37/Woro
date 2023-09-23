"use client";

import Image from "next/image";
import ExpandBtn from "../ExpandBtn";
import classNames from "classnames";
import { useState } from "react";

const PopularHashtags = ({ cardId, expandedCard }) => {
  const [activeSocial, setActiveSocial] = useState(0);

  const data = [
    { name: "LinkedIn", iconUrl: "/assets/images/dashboard/fb.png" },
    { name: "Facebook", iconUrl: "/assets/images/dashboard/instagram.png" },
    { name: "YouTube", iconUrl: "" },
    { name: "Instagram", iconUrl: "" },
    { name: "Twitter", iconUrl: "" },
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className={classNames(
        " opacity-1  transition-all duration-300 ease-in-out overflow-hidden rounded-[20px] bg-white",
        {
          "hidden ": expandedCard && expandedCard !== cardId,
          "w-[88vw]  h-[66vh] ": expandedCard === cardId,
          "h-full  w-[21.9473vw] p-[20px] max-w-[500px]": !expandedCard,
        }
      )}
    >
      {!expandedCard && (
        <div className="flex justify-between mb-2 gap-[14px] font-bold">
          <h6 className="text-[14px]">
            Popular hastags For your{" "}
            <span className="text-woro-blue">Social Media Accounts!</span>
          </h6>

          <ExpandBtn cardId={cardId} />
        </div>
      )}

      {/* trendingHashtagsCard */}
      {!expandedCard && (
        <div className="bg-white shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] p-[12px_10px] max-w-[245px] rounded-[10px]">
          <div className="flex justify-between mb-[5px] gap-[23px] font-bold">
            <div className="flex space-x-[5px]">
              <Image
                src="/assets/images/dashboard/fb.png"
                width="20"
                alt=""
                height="20"
              ></Image>
              <h6 className="text-[14px] font-bold"> FaceBook</h6>
            </div>

            <div className="flex space-x-[5px] items-center">
              <input type="checkbox" id="checkbox1"></input>
              <label className="text-[10px] " htmlFor="checkbox1">
                Latest
              </label>
              <input type="checkbox" id="checkbox2"></input>
              <label className="text-[10px] " htmlFor="checkbox2">
                Month
              </label>
            </div>
          </div>

          <div className="flex flex-wrap text-[10px] font-bold text-woro-blue space-x-2">
            <div>#Business</div>
            <div>#Art</div>
            <div>#Passion </div>
            <div>#Levelup</div>
            <div> #Growth</div>
            <div>#Lorem</div>
            <div>#Ipsum</div>
            <div> #Dolor </div>
          </div>
        </div>
      )}

      {expandedCard === cardId && (
        <div className="flex justify-between w-full h-full">
          {/* left */}
          <div className=" p-[46px] w-2/3">
            <div className="flex items-center justify-between">
              <h3 className="text-[24px] font-bold">Select social media</h3>
              <ExpandBtn cardId={cardId} />
            </div>
            <div className="flex mt-[22px] mb-[50px] gap-[20px]">
              {data?.map((item, indx) => {
                return (
                  <div
                    onClick={() => {
                      setActiveSocial(indx);
                    }}
                    className={classNames(
                      "flex gap-[10px] font-bold text-[14px] items-center justify-center shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] w-[174px] h-[94px] rounded-[20px]",
                      { "bg-woro-blue text-white": activeSocial === indx }
                    )}
                  >
                    <Image src={item?.iconUrl} width="32" height="32" />
                    <span>{item?.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col font-bold gap-[23px]">
              <h3 className="text-[24px]">Popular Tags</h3>
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <input type="checkbox"></input>
                  <label>Latest |</label>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox"></input>
                  <label>Month |</label>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox"></input>
                  <label>Year</label>
                </div>
              </div>

              <div className="flex font-normal  text-woro-blue text-[18px] flex-wrap space-x-2">
                <p>#Lorem </p>
                <p>#Ipsum </p>
                <p>#Business</p>
                <p>#Art </p>
                <p>#Lorem </p>
                <p>#Ipsum </p>
                <p>#Business</p>
                <p>#Art </p>
                <p>#Lorem </p>
                <p>#Ipsum </p>
                <p>#Business</p>
                <p>#Art </p>
                <p>#Lorem </p>
                <p>#Ipsum </p>
                <p>#Business</p>
                <p>#Art </p>
                <p>#Lorem </p>
                <p>#Ipsum </p>
                <p>#Business</p>
                <p>#Art </p>
                <p>#Lorem </p>
                <p>#Ipsum </p>
                <p>#Business</p>
                <p>#Art </p>
              </div>
              <p className="underline font-normal  text-woro-blue text-[18px]">
                show more
              </p>

              <div className="flex gap-1 items-center justify-center h-[48px] text-white bg-woro-blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M7.4998 6V3C7.4998 2.44772 7.94752 2 8.4998 2H20.4998C21.0521 2 21.4998 2.44772 21.4998 3V17C21.4998 17.5523 21.0521 18 20.4998 18H17.4998V20.9991C17.4998 21.5519 17.0499 22 16.493 22H4.50666C3.95059 22 3.5 21.5554 3.5 20.9991L3.5026 7.00087C3.5027 6.44811 3.95264 6 4.50942 6H7.4998ZM5.50242 8L5.50019 20H15.4998V8H5.50242ZM9.4998 6H17.4998V16H19.4998V4H9.4998V6Z"
                    fill="white"
                  />
                </svg>
                <span>Copy tags</span>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(95deg, #7F1DFE 0%, #FD5C5C 100%)",
                }}
                className="flex gap-1 items-center justify-center h-[48px] text-white bg-woro-blue"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 4.4375C15.3462 4.4375 16.4375 3.34619 16.4375 2H17.5625C17.5625 3.34619 18.6538 4.4375 20 4.4375V5.5625C18.6538 5.5625 17.5625 6.65381 17.5625 8H16.4375C16.4375 6.65381 15.3462 5.5625 14 5.5625V4.4375ZM1 11C4.31371 11 7 8.31371 7 5H9C9 8.31371 11.6863 11 15 11V13C11.6863 13 9 15.6863 9 19H7C7 15.6863 4.31371 13 1 13V11ZM4.87601 12C6.18717 12.7276 7.27243 13.8128 8 15.124C8.72757 13.8128 9.81283 12.7276 11.124 12C9.81283 11.2724 8.72757 10.1872 8 8.87601C7.27243 10.1872 6.18717 11.2724 4.87601 12ZM17.25 14C17.25 15.7949 15.7949 17.25 14 17.25V18.75C15.7949 18.75 17.25 20.2051 17.25 22H18.75C18.75 20.2051 20.2051 18.75 22 18.75V17.25C20.2051 17.25 18.75 15.7949 18.75 14H17.25Z"
                    fill="white"
                  />
                </svg>
                <span>Create with AI</span>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-1/3 h-full">
            {" "}
            <Image
              width="572"
              height="747"
              alt="popularHashtags"
              src="/assets/images/dashboard/popularHashtags.png"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularHashtags;
