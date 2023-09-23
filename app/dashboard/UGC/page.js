"use client";

import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <section
      style={{
        background:
          " linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className=" rounded-[20px] overflow-hidden h-[66vh] w-full shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] mt-[34px]"
    >
      <Header activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="bg-white p-[46px_46px_0_46px] rounded-[10px] m-[46px_46px_0_46px] h-[50vh] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]">
        {/* influencerContent */}
        {activeItem === 0 && (
          <div className="flex flex-col gap-[46px]">
            {/* top */}
            <div className="flex items-center justify-between">
              <input
                placeholder="Type a keyword such as Location, Followers etc."
                style={{ width: "90%" }}
                className="text-[#7F7789] outline-none h-[50px] p-[1rem_46px] rounded-[80px] bg-[rgba(190,_148,_243,_0.20)]"
              ></input>
              <div className="p-2 w-[44px] h-[44px] rounded-full border border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M8.04861 20.1251C8.46903 18.9356 9.60342 18.0834 10.9368 18.0834C12.2703 18.0834 13.4047 18.9356 13.8251 20.1251H24.2077V22.1667H13.8251C13.4047 23.3562 12.2703 24.2084 10.9368 24.2084C9.60342 24.2084 8.46903 23.3562 8.04861 22.1667H3.79102V20.1251H8.04861ZM14.1736 12.9792C14.594 11.7898 15.7284 10.9376 17.0618 10.9376C18.3953 10.9376 19.5297 11.7898 19.9501 12.9792H24.2077V15.0209H19.9501C19.5297 16.2104 18.3953 17.0626 17.0618 17.0626C15.7284 17.0626 14.594 16.2104 14.1736 15.0209H3.79102V12.9792H14.1736ZM8.04861 5.83341C8.46903 4.64395 9.60342 3.79175 10.9368 3.79175C12.2703 3.79175 13.4047 4.64395 13.8251 5.83341H24.2077V7.87508H13.8251C13.4047 9.06455 12.2703 9.91675 10.9368 9.91675C9.60342 9.91675 8.46903 9.06455 8.04861 7.87508H3.79102V5.83341H8.04861ZM10.9368 7.87508C11.5006 7.87508 11.9577 7.41803 11.9577 6.85425C11.9577 6.29046 11.5006 5.83341 10.9368 5.83341C10.3731 5.83341 9.91602 6.29046 9.91602 6.85425C9.91602 7.41803 10.3731 7.87508 10.9368 7.87508ZM17.0618 15.0209C17.6257 15.0209 18.0827 14.5639 18.0827 14.0001C18.0827 13.4363 17.6257 12.9792 17.0618 12.9792C16.498 12.9792 16.041 13.4363 16.041 14.0001C16.041 14.5639 16.498 15.0209 17.0618 15.0209ZM10.9368 22.1667C11.5006 22.1667 11.9577 21.7097 11.9577 21.1459C11.9577 20.5821 11.5006 20.1251 10.9368 20.1251C10.3731 20.1251 9.91602 20.5821 9.91602 21.1459C9.91602 21.7097 10.3731 22.1667 10.9368 22.1667Z"
                    fill="#242128"
                  />
                </svg>
              </div>
            </div>
            {/* card container */}
            <div className="flex scrollableContainer  flex-wrap gap-[45px]">
              {["", "", "", "", ""]?.map(() => (
                // influencerCard
                <div className="rounded-[5px] flex flex-col gap-[22px] p-[30px_26px] max-h-[260px] max-w-[463px] border border-[#7F7789] ">
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
                      <span className="text-[14px] text-[#7F7789]">
                        Total followers
                      </span>
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
                      <span className="text-[14px] text-[#7F7789]">
                        Total likes
                      </span>
                    </div>
                  </div>

                  {/* bottom */}
                  <p className="text-[14px] text-[#7F7789] leading-tight ">
                    👋 Hey there, fabulous friends! I'm [Influencer's Name],
                    your go-to source for all things trendy and fun. 🎉.📸 When
                    I'm not behind the camera capturing ....
                  </p>
                </div>
              ))}
            </div>
            <style jsx>{`
              .scrollableContainer {
                min-height: 320px;
                max-height: 35vh;
                overflow: auto;
              }
              .scrollableContainer::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        )}
        {/* ugcContent */}
        {activeItem === 1 && (
          <div className="flex flex-col gap-[46px]">
            {/* top */}
            <div className="flex items-center justify-between gap-[22px]">
              <input
                placeholder="Type a keyword such as Location, Followers etc."
                style={{ width: "80%" }}
                className="text-[#7F7789] outline-none h-[50px] p-[1rem_46px] rounded-[80px] bg-[rgba(190,_148,_243,_0.20)]"
              ></input>

              <button className="border-2 border-woro-blue rounded-full text-center text-woro-blue w-max h-[50px] font-bold text-[18px] flex items-center px-[20px]">
                UGC near you
              </button>

              <div className="p-2 w-[44px] h-[44px] rounded-full border border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M8.04861 20.1251C8.46903 18.9356 9.60342 18.0834 10.9368 18.0834C12.2703 18.0834 13.4047 18.9356 13.8251 20.1251H24.2077V22.1667H13.8251C13.4047 23.3562 12.2703 24.2084 10.9368 24.2084C9.60342 24.2084 8.46903 23.3562 8.04861 22.1667H3.79102V20.1251H8.04861ZM14.1736 12.9792C14.594 11.7898 15.7284 10.9376 17.0618 10.9376C18.3953 10.9376 19.5297 11.7898 19.9501 12.9792H24.2077V15.0209H19.9501C19.5297 16.2104 18.3953 17.0626 17.0618 17.0626C15.7284 17.0626 14.594 16.2104 14.1736 15.0209H3.79102V12.9792H14.1736ZM8.04861 5.83341C8.46903 4.64395 9.60342 3.79175 10.9368 3.79175C12.2703 3.79175 13.4047 4.64395 13.8251 5.83341H24.2077V7.87508H13.8251C13.4047 9.06455 12.2703 9.91675 10.9368 9.91675C9.60342 9.91675 8.46903 9.06455 8.04861 7.87508H3.79102V5.83341H8.04861ZM10.9368 7.87508C11.5006 7.87508 11.9577 7.41803 11.9577 6.85425C11.9577 6.29046 11.5006 5.83341 10.9368 5.83341C10.3731 5.83341 9.91602 6.29046 9.91602 6.85425C9.91602 7.41803 10.3731 7.87508 10.9368 7.87508ZM17.0618 15.0209C17.6257 15.0209 18.0827 14.5639 18.0827 14.0001C18.0827 13.4363 17.6257 12.9792 17.0618 12.9792C16.498 12.9792 16.041 13.4363 16.041 14.0001C16.041 14.5639 16.498 15.0209 17.0618 15.0209ZM10.9368 22.1667C11.5006 22.1667 11.9577 21.7097 11.9577 21.1459C11.9577 20.5821 11.5006 20.1251 10.9368 20.1251C10.3731 20.1251 9.91602 20.5821 9.91602 21.1459C9.91602 21.7097 10.3731 22.1667 10.9368 22.1667Z"
                    fill="#242128"
                  />
                </svg>
              </div>
            </div>
            {/* card container */}
            <div className="flex scrollableContainer  flex-wrap gap-[45px]">
              {["", "", "", "", ""]?.map(() => (
                // ugcCard
                <div className="rounded-[5px] flex flex-col gap-[13px] p-[30px] max-h-[393px] max-w-[463px] border border-[#7F7789] ">
                  {/* top */}
                  <div className="flex w-[403px] h-[228px] overflow-hidden rounded-[5px] justify-between">
                    <Image
                      src="/assets/images/dashboard/ugcImg.png"
                      alt="ugcImage"
                      width="403"
                      height="228"
                    />
                  </div>

                  {/* mid */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-[10px]">
                      <Image
                        src="/assets/images/profile.png"
                        alt="profile"
                        width="51"
                        height="51"
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
                        width="28"
                        height="28"
                      />
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <path
                        d="M10.1263 25.6771L4.60449 30.0156V7.08333C4.60449 6.39874 5.15948 5.84375 5.84408 5.84375H28.1566C28.8412 5.84375 29.3962 6.39874 29.3962 7.08333V24.4375C29.3962 25.1221 28.8412 25.6771 28.1566 25.6771H10.1263ZM9.26882 23.1979H26.917V8.32292H7.08366V24.9149L9.26882 23.1979ZM15.7607 14.5208H18.2399V17H15.7607V14.5208ZM10.8024 14.5208H13.2816V17H10.8024V14.5208ZM20.7191 14.5208H23.1982V17H20.7191V14.5208Z"
                        fill="#7F1DFE"
                      />
                    </svg>
                  </div>

                  {/* bottom */}
                  <p className="text-[14px] text-[#7F7789] leading-tight ">
                    👋 Hey there, fabulous friends!. #trending #levelup #flowers
                    #fun #gaming #funny...
                  </p>
                </div>
              ))}
            </div>
            <style jsx>{`
              .scrollableContainer {
                min-height: 320px;
                max-height: 35vh;
                overflow: auto;
              }
              .scrollableContainer::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
};

const Header = ({ activeItem, setActiveItem }) => {
  return (
    <div className="h-[118px] flex items-center px-[65px] bg-white shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] w-full space-x-[46px]">
      <div className="flex items-center justify-center w-[40px] h-[40px] bg-woro-blue rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M7.59343 0.46955C7.99234 0.165614 8.48822 0 8.99936 0C9.51049 0 10.0064 0.165614 10.4053 0.46955L17.1553 5.60542C17.6889 6.0114 18 6.62648 18 7.27703V15.8601C18 16.4276 17.7629 16.9719 17.341 17.3732C16.919 17.7745 16.3467 18 15.75 18H11.25C10.9943 18 10.749 17.9034 10.5681 17.7314C10.3873 17.5594 10.2857 17.3261 10.2857 17.0829V10.663H7.71429V17.0829C7.71429 17.3261 7.61269 17.5594 7.43185 17.7314C7.25101 17.9034 7.00574 18 6.75 18H2.25C1.65326 18 1.08097 17.7745 0.65901 17.3732C0.237053 16.9719 0 16.4276 0 15.8601V7.27581C0 6.62648 0.311143 6.0114 0.844714 5.60542L7.59343 0.46955ZM9.20057 1.90148C9.14361 1.85822 9.07289 1.83466 9 1.83466C8.92711 1.83466 8.85639 1.85822 8.79943 1.90148L2.04943 7.03735C2.01161 7.06607 1.9811 7.10255 1.96018 7.14404C1.93925 7.18554 1.92845 7.231 1.92857 7.27703V15.8601C1.92857 16.0288 2.07257 16.1658 2.25 16.1658H5.78571V9.74592C5.78571 9.50268 5.88731 9.26941 6.06815 9.09741C6.24899 8.92542 6.49426 8.8288 6.75 8.8288H11.25C11.5057 8.8288 11.751 8.92542 11.9319 9.09741C12.1127 9.26941 12.2143 9.50268 12.2143 9.74592V16.1658H15.75C15.8352 16.1658 15.917 16.1336 15.9773 16.0762C16.0376 16.0189 16.0714 15.9411 16.0714 15.8601V7.27581C16.0714 7.22999 16.0605 7.18477 16.0395 7.14349C16.0186 7.10222 15.9882 7.06595 15.9506 7.03735L9.20057 1.90148Z"
            fill="white"
          />
        </svg>
      </div>

      <div
        onClick={() => {
          setActiveItem(0);
        }}
        className={classNames("flex text-[18px] cursor-pointer gap-2 relative", {
          "text-woro-blue": activeItem === 0,
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.66667 3C3.22464 3 2.80072 3.15804 2.48816 3.43934C2.17559 3.72064 2 4.10218 2 4.5V19.5C2 19.8978 2.17559 20.2794 2.48816 20.5607C2.80072 20.842 3.22464 21 3.66667 21H6.44444V19.5C6.44444 19.3674 6.50298 19.2402 6.60716 19.1464C6.71135 19.0527 6.85266 19 7 19H9.22222C9.36957 19 9.51087 19.0527 9.61506 19.1464C9.71925 19.2402 9.77778 19.3674 9.77778 19.5V21H13.6667V19.5C13.6667 19.3674 13.7252 19.2402 13.8294 19.1464C13.9336 19.0527 14.0749 19 14.2222 19H16.4444C16.5918 19 16.7331 19.0527 16.8373 19.1464C16.9415 19.2402 17 19.3674 17 19.5V21H20.3333C20.7754 21 21.1993 20.842 21.5118 20.5607C21.8244 20.2794 22 19.8978 22 19.5V4.5C22 4.10218 21.8244 3.72064 21.5118 3.43934C21.1993 3.15804 20.7754 3 20.3333 3H3.66667ZM17.55 17.3175C17.8539 17.04 18.1611 16.76 18.4444 16.3425C18.5156 16.2375 18.5878 16.137 18.6578 16.039C18.9111 15.6865 19.1356 15.374 19.1767 15.054C19.23 14.6455 19.2633 12.1955 19.1167 11.8245C18.9694 11.454 18.1222 11.246 17.8294 12.076C17.685 12.4855 17.6394 13.012 17.5983 13.49C17.5556 13.98 17.5178 14.419 17.3817 14.626C17.1133 15.035 16.2494 16.0525 16.2494 16.0525L16.995 14.779C16.995 14.779 17.1083 14.603 17.0489 14.2685C16.9889 13.9335 16.5394 13.4655 16.3283 13.8375C16.1172 14.209 15.7478 14.5445 15.7478 14.5445L14.4433 15.959C14.4433 15.959 14.0183 16.455 14.0067 16.727C14.0028 16.818 13.94 17.02 13.8678 17.2485C13.7872 17.5065 13.6956 17.7985 13.6667 18.0035V18.5H16.8739V18.0035C17.0894 17.737 17.3189 17.5285 17.55 17.3175ZM6.54278 18.0035C6.32667 17.737 6.09667 17.5285 5.865 17.3175C5.55944 17.04 5.25167 16.76 4.96722 16.3425C4.89611 16.2375 4.82333 16.137 4.75333 16.039C4.49944 15.6865 4.27444 15.374 4.23222 15.054C4.17889 14.6455 4.345 12.1955 4.49222 11.8245C4.64 11.454 5.49 11.246 5.78389 12.076C5.92833 12.4855 5.97444 13.012 6.01611 13.49C6.05833 13.98 6.09667 14.419 6.23278 14.626C6.50222 15.035 7.36889 16.0525 7.36889 16.0525L6.62111 14.779C6.62111 14.779 6.50722 14.603 6.56722 14.2685C6.62722 13.9335 7.07833 13.4655 7.29 13.8375C7.50222 14.209 7.87278 14.5445 7.87278 14.5445L9.18111 15.959C9.18111 15.959 9.60778 16.455 9.61944 16.727C9.62778 16.9205 9.72333 17.617 9.77778 18.0035V18.5H6.54278V18.0035ZM9.65611 5.5C8.12111 5.5 7 6.993 7 8.6035C7 12.1985 12 14.5 12 14.5C12 14.5 17 12.05 17 8.6035C17 6.9935 15.8789 5.5 14.3439 5.5C13.2783 5.5 12.4883 6.17 12 7.12C11.5122 6.17 10.7217 5.5 9.65611 5.5Z"
            fill={activeItem === 0 ? "#7F1DFE" : "black"}
          />
        </svg>
        <span>Influencer</span>
        {activeItem === 0 && (
          <div className="absolute bottom-[-5px] w-full h-[2px] rounded-sm bg-woro-blue"></div>
        )}
      </div>

      <div
        onClick={() => {
          setActiveItem(1);
        }}
        className={classNames("flex text-[18px] cursor-pointer gap-2 relative", {
          "text-woro-blue": activeItem === 1,
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M20.001 12.5C22.2092 12.5 24 10.7095 24 8.5C24 6.29105 22.2092 4.5 20.001 4.5C17.7911 4.5 16 6.29134 16 8.5C15.9997 10.7095 17.7911 12.5 20.001 12.5Z"
            fill="#242128"
          />
          <path
            d="M11.5 12.5C13.433 12.5 15 10.933 15 9C15 7.067 13.433 5.5 11.5 5.5C9.567 5.5 8 7.067 8 9C8 10.933 9.567 12.5 11.5 12.5Z"
            fill="#242128"
          />
          <path
            d="M3.3997 13.7289C5.1078 13.7289 6.49311 12.3352 6.49311 10.615C6.49311 8.89423 5.1078 7.5 3.3997 7.5C1.69106 7.5 0.306284 8.89423 0.306284 10.615C0.306284 12.3355 1.69079 13.7289 3.3997 13.7289ZM3.3997 14.4402C1.43807 14.4402 0 16.1804 0 17.9781V19.1882C0 19.3594 0.138531 19.5 0.30899 19.5H6.48959C6.66059 19.5 6.79913 19.3594 6.79913 19.1882V17.9781C6.79913 16.1804 5.36105 14.4402 3.3997 14.4402ZM11.2007 13.8771C9.02131 13.8771 7.42306 15.811 7.42306 17.8088V19.1535C7.42306 19.3436 7.57701 19.5 7.76641 19.5H14.634C14.725 19.5001 14.8124 19.4636 14.8769 19.3987C14.9413 19.3337 14.9777 19.2455 14.9779 19.1535V17.8088C14.9782 15.8112 13.3802 13.8771 11.2007 13.8771ZM19.8029 13.2528C17.3813 13.2528 15.6059 15.4013 15.6059 17.6214V19.1152C15.6059 19.3266 15.7769 19.5 15.9874 19.5H23.6174C23.829 19.5 24 19.3263 24 19.1152V17.6214C24 15.4015 22.2245 13.2528 19.8029 13.2528Z"
            fill={activeItem === 1 ? "#7F1DFE" : "black"}
          />
        </svg>
        <span>UGC</span>
        {activeItem === 1 && (
          <div className="absolute bottom-[-5px] w-full h-[2px] rounded-sm bg-woro-blue"></div>
        )}
      </div>

      <div
        onClick={() => {
          setActiveItem(2);
        }}
        className={classNames("flex text-[18px] cursor-pointer gap-2 relative", {
          "text-woro-blue": activeItem === 2,
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M5 21.5V5.5C5 4.95 5.196 4.479 5.588 4.087C5.98 3.695 6.45067 3.49934 7 3.5H17C17.55 3.5 18.021 3.696 18.413 4.088C18.805 4.48 19.0007 4.95067 19 5.5V21.5L12 18.5L5 21.5Z"
            fill={activeItem === 2 ? "#7F1DFE" : "black"}
          />
        </svg>
        <span>Saved Profiles</span>
        {activeItem === 2 && (
          <div className="absolute bottom-[-5px] w-full h-[2px] rounded-sm bg-woro-blue"></div>
        )}
      </div>
    </div>
  );
};

export default page;
