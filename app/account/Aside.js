"use client";

import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

const Aside = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <aside className="min-w-[170px] 2xl:w-[310px] bg-white p-[32px_15px] 2xl:p-[49px_29px] flex flex-col  gap-6 2xl:gap-[46px] child:text-[13px] child:2xl:text-lg child:leading-tight">
      <Link
        href="/account"
        onClick={() => {
          setActiveItem(0);
        }}
        className={classNames("relative flex gap-[10px]", {
          "text-woro-blue": activeItem === 0,
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 2xl:w-6 2xl:h-6"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 20.75C5 16.884 8.134 13.75 12 13.75C15.866 13.75 19 16.884 19 20.75H17.25C17.25 17.8505 14.8995 15.5 12 15.5C9.1005 15.5 6.75 17.8505 6.75 20.75H5ZM12 12.875C9.09937 12.875 6.75 10.5256 6.75 7.625C6.75 4.72438 9.09937 2.375 12 2.375C14.9006 2.375 17.25 4.72438 17.25 7.625C17.25 10.5256 14.9006 12.875 12 12.875ZM12 11.125C13.9337 11.125 15.5 9.55875 15.5 7.625C15.5 5.69125 13.9337 4.125 12 4.125C10.0662 4.125 8.5 5.69125 8.5 7.625C8.5 9.55875 10.0662 11.125 12 11.125Z"
            fill={activeItem === 0 ? "#7F1DFE" : "black"}
          />
        </svg>
        <h5>Profile</h5>
        {activeItem === 0 && (
          <div className="absolute rounded-full -left-3 2xl:left-[-20px] top-0 w-[5px] bg-woro-blue h-full"></div>
        )}
      </Link>

      <Link
        href="/account/switch"
        onClick={() => {
          setActiveItem(1);
        }}
        className={classNames("relative flex  gap-[10px]", {
          "text-woro-blue": activeItem === 1,
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 2xl:w-6 2xl:h-6"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.9503 7.94975L10.5361 9.36396L8.00128 6.828L8.00053 20H6.00053L6.00128 6.828L3.465 9.36396L2.05078 7.94975L7.00053 3L11.9503 7.94975ZM21.9503 16.0503L17.0005 21L12.0508 16.0503L13.465 14.636L16.0013 17.172L16.0005 4H18.0005L18.0013 17.172L20.5361 14.636L21.9503 16.0503Z"
            fill={activeItem === 1 ? "#7F1DFE" : "black"}
          />
        </svg>
        <h5>Switch accounts</h5>
        {activeItem === 1 && (
          <div className="absolute rounded-full -left-3 2xl:left-[-20px] top-0 w-[5px] bg-woro-blue h-full"></div>
        )}
      </Link>

      <Link
        href="/account/id"
        onClick={() => {
          setActiveItem(2);
        }}
        className={classNames("relative flex  gap-[10px]", {
          "text-woro-blue": activeItem === 2,
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 2xl:w-6 2xl:h-6"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3.62516 10.2504L3.625 20.3753H5.875L5.87512 12.5004L17.3184 12.5003L12.875 16.9437L14.466 18.5348L21.6255 11.3753L14.466 4.21582L12.875 5.80681L17.3185 10.2503L3.62516 10.2504Z"
            fill={activeItem === 2 ? "#7F1DFE" : "black"}
          />
        </svg>
        <h5>Account ID</h5>
        {activeItem === 2 && (
          <div className="absolute rounded-full -left-3 2xl:left-[-20px] top-0 w-[5px] bg-woro-blue h-full"></div>
        )}
      </Link>

      <Link
        href="/account/verification"
        onClick={() => {
          setActiveItem(3);
        }}
        className={classNames("relative flex  gap-[10px]", {
          "text-woro-blue": activeItem === 3,
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 2xl:w-6 2xl:h-6"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
            fill={activeItem === 3 ? "#7F1DFE" : "black"}
          />
        </svg>
        <h5>Verification</h5>
        {activeItem === 3 && (
          <div className="absolute rounded-full -left-3 2xl:left-[-20px] top-0 w-[5px] bg-woro-blue h-full"></div>
        )}
      </Link>

      <Link
        href="/account/support"
        onClick={() => {
          setActiveItem(4);
        }}
        className={classNames("relative flex  gap-[10px]", {
          "text-woro-blue": activeItem === 4,
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 2xl:w-6 2xl:h-6"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 3C7.0374 3 3 7.0374 3 12V15.7287C3 16.6503 3.8073 17.4 4.8 17.4H5.7C5.93869 17.4 6.16761 17.3052 6.3364 17.1364C6.50518 16.9676 6.6 16.7387 6.6 16.5V11.8713C6.6 11.6326 6.50518 11.4037 6.3364 11.2349C6.16761 11.0661 5.93869 10.9713 5.7 10.9713H4.8828C5.3832 7.4883 8.3802 4.8 12 4.8C15.6198 4.8 18.6168 7.4883 19.1172 10.9713H18.3C18.0613 10.9713 17.8324 11.0661 17.6636 11.2349C17.4948 11.4037 17.4 11.6326 17.4 11.8713V17.4C17.4 18.3927 16.5927 19.2 15.6 19.2H13.8V18.3H10.2V21H15.6C17.5854 21 19.2 19.3854 19.2 17.4C20.1927 17.4 21 16.6503 21 15.7287V12C21 7.0374 16.9626 3 12 3Z"
            fill={activeItem === 4 ? "#7F1DFE" : "black"}
          />
        </svg>
        <h5>Support</h5>
        {activeItem === 4 && (
          <div className="absolute rounded-full -left-3 2xl:left-[-20px] top-0 w-[5px] bg-woro-blue h-full"></div>
        )}
      </Link>

      <Link
        href="/account/marketplace"
        onClick={() => {
          setActiveItem(5);
        }}
        className={classNames("relative flex  gap-[10px]", {
          "text-woro-blue": activeItem === 5,
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 2xl:w-6 2xl:h-6"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M7.5 5.5C7.5 4.30653 7.97411 3.16193 8.81802 2.31802C9.66193 1.47411 10.8065 1 12 1C13.1935 1 14.3381 1.47411 15.182 2.31802C16.0259 3.16193 16.5 4.30653 16.5 5.5V7H21V23H3V7H7.5V5.5ZM7.5 9H5V21H19V9H16.5V12H14.5V9H9.5V12H7.5V9ZM14.5 7V5.5C14.5 4.83696 14.2366 4.20107 13.7678 3.73223C13.2989 3.26339 12.663 3 12 3C11.337 3 10.7011 3.26339 10.2322 3.73223C9.76339 4.20107 9.5 4.83696 9.5 5.5V7H14.5Z"
            fill={activeItem === 5 ? "#7F1DFE" : "black"}
          />
        </svg>
        <h5>Marketplace</h5>
        {activeItem === 5 && (
          <div className="absolute rounded-full -left-3 2xl:left-[-20px] top-0 w-[5px] bg-woro-blue h-full"></div>
        )}
      </Link>

      <Link
        href="/account/plan-upgrade"
        onClick={() => {
          setActiveItem(6);
        }}
        className={classNames(
          "relative flex  font-bold text-[#FEC963] gap-[10px]",
          { "text-woro-blue": activeItem === 6 }
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 2xl:w-6 2xl:h-6"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2.8048 5.20031L7.00408 7.99983L11.1903 2.13905C11.5113 1.68964 12.1359 1.58555 12.5853 1.90656C12.6751 1.9707 12.7536 2.04926 12.8178 2.13905L17.0041 7.99983L21.2033 5.20031C21.6629 4.89395 22.2837 5.01813 22.5901 5.47766C22.7218 5.67527 22.7789 5.91332 22.7512 6.1492L21.108 20.1167C21.0487 20.6203 20.6219 20.9998 20.1148 20.9998H3.89333C3.38625 20.9998 2.95943 20.6203 2.90018 20.1167L1.25695 6.1492C1.19242 5.6007 1.58476 5.10374 2.13326 5.03921C2.36914 5.01146 2.60719 5.06856 2.8048 5.20031ZM12.0041 14.9998C13.1086 14.9998 14.0041 14.1044 14.0041 12.9998C14.0041 11.8953 13.1086 10.9998 12.0041 10.9998C10.8995 10.9998 10.0041 11.8953 10.0041 12.9998C10.0041 14.1044 10.8995 14.9998 12.0041 14.9998Z"
            fill={activeItem === 6 ? "#7F1DFE" : "#FEC963"}
          />
        </svg>
        <h5>Upgrade Plan</h5>
        {activeItem === 6 && (
          <div className="absolute rounded-full -left-3 2xl:left-[-20px] top-0 w-[5px] bg-woro-blue h-full"></div>
        )}
      </Link>
    </aside>
  );
};

export default Aside;
