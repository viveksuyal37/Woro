"use client";
import { nanoid } from "nanoid";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [activeAccount, setActiveAccount] = useState(0);

  let accounts = [
    {
      name: "Vivek Suyal",
      notification: "12 new notifications",
      role: "Admin",
    },
    { name: "Arthur Morgan", notification: false, role: "Admin" },
    {
      name: "Kapil Sharma",
      notification: "5 new notifications",
      role: "Employee",
    },
  ];

  return (
    <section className="w-full h-full bg-white rounded-[10px] p-[46px]">
      {accounts?.map((account, indx) => {
        return (
          <div key={nanoid(4)} className="flex items-center justify-between border-b p-[22px_18px] border-b-[#7F7789]">
            <div className="flex items-center gap-[22px]">
              <div>
                <Image
                  src="/assets/images/profile.png"
                  width="58"
                  height="58"
                  alt="profile"
                ></Image>
              </div>
              <div className="flex flex-col gap-[1px]">
                <h6 className="text-[18ox] font-bold">{account?.name}</h6>
                <p className="text-[14px] text-woro-blue">{account?.role}</p>
              </div>
              {account.notification && (
                <div className="flex gap-[10px] text-[14px] items-center">
                  <div className="w-[7px] h-[7px] rounded-full bg-[#E93838]"></div>
                  <p>{account.notification}</p>
                </div>
              )}
            </div>

            <div
              onClick={() => {
                setActiveAccount(indx);
              }}
              className="cursor-pointer"
            >
              {activeAccount === indx ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <circle
                    cx="19"
                    cy="19"
                    r="13.5"
                    stroke="#7F1DFE"
                    strokeWidth="3"
                  />
                  <circle cx="19" cy="19" r="6" fill="#7F1DFE" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <circle
                    cx="19"
                    cy="19"
                    r="11"
                    fill="white"
                    stroke="#7F7789"
                    strokeWidth="8"
                  />
                </svg>
              )}
            </div>
          </div>
        );
      })}

      <div className="flex gap-[10px] items-center justify-center py-[19px] mt-[22px] border border-[#242128] border-dashed rounded-[10px] w-full h-[78px]">
       
        <div className="bg-woro-blue rounded-full p-[8px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.7004 10.6999V2.8999H13.3004V10.6999H21.1004V13.2999H13.3004V21.0999H10.7004V13.2999H2.90039V10.6999H10.7004Z"
              fill="white"
            />
          </svg>
        </div>
          <p className="text-[#7F7789] text-[18px]">Add account</p>
      </div>
    </section>
  );
};

export default page;
