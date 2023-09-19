"use client";

import { useEffect, useState } from "react";

const MidFooter = () => {
  const [activeMenu, setActiveMenu] = useState(0);



  return (
    <div
      style={{
        background:
          "linear-gradient(139deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.70) 51.35%, rgba(255, 255, 255, 0.50) 100%)",
      }}
      className=" flex justify-between p-[14px_21px_14px_15px] 2xl:max-w-[867px] h-[85px] 2xl:h-[118px]  gap-[14px]  rounded-[20px] backdrop-blur-[5px] shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]"
    >
      <div
        onClick={() => {
          setActiveMenu(0);
        }}
        className={
          activeMenu === 0
            ? "flex bg-white shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] cursor-pointer gap-[10px] p-[33px_35px] rounded-[10px]  h-full text-woro-blue"
            : " flex cursor-pointer gap-[10px] p-[33px_35px] rounded-[10px]  h-full text-black"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>{" "}
        <p>Home</p>
      </div>

      <div
        onClick={() => {
          setActiveMenu(1);
        }}
        className={
          activeMenu === 1
            ? "flex bg-white shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] cursor-pointer gap-[10px] p-[33px_35px] rounded-[10px]  h-full text-woro-blue"
            : " flex cursor-pointer gap-[10px] p-[33px_35px] rounded-[10px]  h-full text-black"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>
        <p>Calender</p>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #7F1DFE 0%, #464BD3 100%)",
        }}
        className=" flex text-white items-center justify-center w-[96px] h-[96px]  rounded-full "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>

      <div
        onClick={() => {
          setActiveMenu(2);
        }}
        className={
          activeMenu === 2
            ? "flex bg-white shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] cursor-pointer gap-[10px] p-[33px_35px] rounded-[10px]  h-full text-woro-blue"
            : " flex cursor-pointer gap-[10px] p-[33px_35px] rounded-[10px]  h-full text-black"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <p>Support</p>
      </div>

      <div
        onClick={() => {
          setActiveMenu(3);
        }}
        className={
          activeMenu === 3
            ? "flex bg-white shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] cursor-pointer gap-[10px] p-[33px_35px] rounded-[10px]  h-full text-woro-blue"
            : " flex cursor-pointer gap-[10px] p-[33px_35px] rounded-[10px]  h-full text-black"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>{" "}
        <p>Settings</p>
      </div>
    </div>
  );
};

export default MidFooter;
