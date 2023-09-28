"use client";

/*BuiltIn Import */
import Image from "next/image";
import { useState } from "react";

const InfluencerCard = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setOpenModal(true);
        }}
        className="rounded-[5px] flex flex-col gap-[22px] p-[30px_26px] max-h-[260px] max-w-[463px] border border-[#7F7789] cursor-pointer"
      >
        {/* top */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-[20px]">
            <Image
              src="/assets/images/profile.png"
              alt="profile"
              width="61"
              height="61"
            />
            <div>
              <p>
                <strong>Username</strong>
              </p>
              <p className="text-[#7F7789]">Location</p>
            </div>
            <Image
              className="h-max"
              src="/assets/images/dashboard/fb.png"
              alt="social"
              width="24"
              height="24"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M7.5 31.5V7.5C7.5 6.675 7.794 5.9685 8.382 5.3805C8.97 4.7925 9.676 4.499 10.5 4.5H25.5C26.325 4.5 27.0315 4.794 27.6195 5.382C28.2075 5.97 28.501 6.676 28.5 7.5V31.5L18 27L7.5 31.5ZM10.5 26.925L18 23.7L25.5 26.925V7.5H10.5V26.925Z"
              fill="#242128"
            />
          </svg>
        </div>

        {/* mid */}
        <div className="flex gap-[22px]">
          <div className="flex flex-col gap-[7px]">
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 20.75C5 16.884 8.134 13.75 12 13.75C15.866 13.75 19 16.884 19 20.75H17.25C17.25 17.8505 14.8995 15.5 12 15.5C9.1005 15.5 6.75 17.8505 6.75 20.75H5ZM12 12.875C9.09937 12.875 6.75 10.5256 6.75 7.625C6.75 4.72438 9.09937 2.375 12 2.375C14.9006 2.375 17.25 4.72438 17.25 7.625C17.25 10.5256 14.9006 12.875 12 12.875ZM12 11.125C13.9337 11.125 15.5 9.55875 15.5 7.625C15.5 5.69125 13.9337 4.125 12 4.125C10.0662 4.125 8.5 5.69125 8.5 7.625C8.5 9.55875 10.0662 11.125 12 11.125Z"
                  fill="#00FABA"
                />
              </svg>
              <h6>23.9k</h6>
            </div>
            <span className="text-[14px] text-[#7F7789]">Total followers</span>
          </div>

          <div className="flex flex-col gap-[7px]">
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0006 5.15115C14.1538 3.21833 17.4813 3.2825 19.5554 5.36091C21.6295 7.43933 21.7008 10.7506 19.7717 12.9103L11.9996 20.6946L4.2276 12.9103C2.29864 10.7506 2.37074 7.43409 4.44392 5.36091C6.51945 3.28539 9.8411 3.21546 12.0006 5.15115ZM18.2578 6.65593C16.8836 5.27895 14.665 5.22309 13.2253 6.51547L12.0014 7.61397L10.7769 6.51633C9.33307 5.22214 7.11848 5.27907 5.74028 6.65727C4.37468 8.02287 4.30613 10.21 5.56461 11.6546L11.9996 18.0998L18.4348 11.6546C19.6937 10.2095 19.6254 8.02648 18.2578 6.65593Z"
                  fill="#E93838"
                />
              </svg>
              <h6>233.9k</h6>
            </div>
            <span className="text-[14px] text-[#7F7789]">Total likes</span>
          </div>
        </div>

        {/* bottom */}
        <p className="text-[14px] text-[#7F7789] leading-tight ">
          👋 Hey there, fabulous friends! I'm [Influencer's Name], your go-to
          source for all things trendy and fun. 🎉.📸 When I'm not behind the
          camera capturing ....
        </p>
      </div>
      {/* modal */}
      {openModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-20">
          <div className="bg-white p-[60px] relative flex w-[1066px] h-[657px]">
            {/* close btn */}
            <div
              title="close"
              onClick={() => {
                setOpenModal(false);
              }}
              className="absolute cursor-pointer top-6 right-4"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex leading-tight gap-[60px] justify-between items-center">
              {/* left */}
              <div className="flex max-w-[519px] w-full flex-col gap-[45px]">
                {/* pic and username */}
                <div className="flex gap-[56px]">
                  <Image
                    src="/assets/images/profile.png"
                    width="137"
                    height="137"
                    className="rounded-full"
                    alt="user"
                  />
                  <div className="flex font-bold text-[36px] flex-col gap-[22px]">
                    <div>
                      <h2>Username</h2>
                      <p className="text-[24px] text-[#7F7789] font-normal">
                        Location
                      </p>
                    </div>
                    <div className="flex gap-[7px]">
                      <Image
                        alt="social"
                        src="/assets/images/dashboard/instagram.png"
                        width="34"
                        height="34"
                      />
                      <p className="text-woro-blue font-normal text-[24px]">
                        instagram
                      </p>
                    </div>
                  </div>
                </div>
                {/* followers and likes */}
                <div className="flex gap-[22px]">
                  <div className="flex flex-col gap-[7px]">
                    <div className="flex text-[36px] space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 20.75C5 16.884 8.134 13.75 12 13.75C15.866 13.75 19 16.884 19 20.75H17.25C17.25 17.8505 14.8995 15.5 12 15.5C9.1005 15.5 6.75 17.8505 6.75 20.75H5ZM12 12.875C9.09937 12.875 6.75 10.5256 6.75 7.625C6.75 4.72438 9.09937 2.375 12 2.375C14.9006 2.375 17.25 4.72438 17.25 7.625C17.25 10.5256 14.9006 12.875 12 12.875ZM12 11.125C13.9337 11.125 15.5 9.55875 15.5 7.625C15.5 5.69125 13.9337 4.125 12 4.125C10.0662 4.125 8.5 5.69125 8.5 7.625C8.5 9.55875 10.0662 11.125 12 11.125Z"
                          fill="#00FABA"
                        />
                      </svg>
                      <h6>23.9k</h6>
                    </div>
                    <span className="text-[24px] text-[#7F7789]">
                      Total followers
                    </span>
                  </div>

                  <div className="flex flex-col gap-[7px]">
                    <div className="flex text-[36px] space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.0006 5.15115C14.1538 3.21833 17.4813 3.2825 19.5554 5.36091C21.6295 7.43933 21.7008 10.7506 19.7717 12.9103L11.9996 20.6946L4.2276 12.9103C2.29864 10.7506 2.37074 7.43409 4.44392 5.36091C6.51945 3.28539 9.8411 3.21546 12.0006 5.15115ZM18.2578 6.65593C16.8836 5.27895 14.665 5.22309 13.2253 6.51547L12.0014 7.61397L10.7769 6.51633C9.33307 5.22214 7.11848 5.27907 5.74028 6.65727C4.37468 8.02287 4.30613 10.21 5.56461 11.6546L11.9996 18.0998L18.4348 11.6546C19.6937 10.2095 19.6254 8.02648 18.2578 6.65593Z"
                          fill="#E93838"
                        />
                      </svg>
                      <h6>233.9k</h6>
                    </div>
                    <span className="text-[24px] text-[#7F7789]">
                      Total likes
                    </span>
                  </div>
                </div>
                {/* intro */}
                <p className="text-[24px] text-[#7F7789]">
                  👋 Hey there, fabulous friends! I'm [Influencer's Name], your
                  go-to source for all things trendy and fun. 🎉.📸 When I'm not
                  behind the camera capturing ....
                </p>
                {/* btn */}
                <div className="bg-woro-blue w-full text-white justify-center items-center h-[68px] rounded-[3px] flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 21V5C5 4.45 5.196 3.979 5.588 3.587C5.98 3.195 6.45067 2.99934 7 3H17C17.55 3 18.021 3.196 18.413 3.588C18.805 3.98 19.0007 4.45067 19 5V21L12 18L5 21Z"
                      fill="white"
                    />
                  </svg>
                  Save profile
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfluencerCard;
