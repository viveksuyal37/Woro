import Image from "next/image";
import { useState } from "react";

const UgcCard = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setOpenModal(true);
        }}
        className="cursor-pointer rounded-[5px] flex flex-col gap-[13px] p-[30px] max-h-[393px] max-w-[463px] border border-[#7F7789] "
      >
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
          👋 Hey there, fabulous friends!. #trending #levelup #flowers #fun
          #gaming #funny...
        </p>
      </div>

      {/* modal */}
      {openModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-20">
          <div className="bg-white p-[60px]  relative flex w-[1066px] h-[657px]">
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
            <div className="flex leading-tight gap-[74px] justify-between items-center">
              {/* left */}
              <div className="w-[430px] h-[537px] bg-center bg-cover bg-[url('/assets/images/dashboard/ugcImg.png')]"></div>

              {/* right */}
              <div className="relative flex max-w-[519px] w-full h-full  flex-col gap-[45px]">
                {/* pic and username */}
                <div className="flex gap-[56px]">
                  <div className="w-[88px] height-[88px]">
                    <Image
                      src="/assets/images/profile.png"
                      width="88"
                      height="88"
                      className="rounded-full"
                      alt="user"
                    />
                  </div>
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
                <div className="flex gap-[46px]">
                  <div className="flex flex-col gap-[7px]">
                    <div className="flex text-[24px] space-x-2">
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
                    <span className=" text-[#7F7789]">Total followers</span>
                  </div>

                  <div className="flex flex-col gap-[7px]">
                    <div className="flex text-[24px] space-x-2">
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
                    <span className=" text-[#7F7789]">Total likes</span>
                  </div>

                  <div className="flex flex-col gap-[7px]">
                    <div className="flex text-[24px] space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41"
                        height="40"
                        viewBox="0 0 41 40"
                        fill="none"
                      >
                        <path
                          d="M15.3743 4.0965V7.63603C10.3658 9.61398 6.83268 14.4045 6.83268 20.0002C6.83268 27.364 12.9515 33.3335 20.4993 33.3335C26.2349 33.3335 31.1452 29.8865 33.1726 25.0002H36.8006C34.6237 31.762 28.1486 36.6668 20.4993 36.6668C11.0645 36.6668 3.41602 29.2048 3.41602 20.0002C3.41602 12.5374 8.44345 6.22028 15.3743 4.0965ZM20.4993 3.3335C29.9341 3.3335 37.5827 10.7954 37.5827 20.0002C37.5827 20.5627 37.5542 21.1187 37.4983 21.6668H18.791V3.4158C19.3529 3.36136 19.9228 3.3335 20.4993 3.3335ZM22.2077 6.76998V18.3335H34.0603C33.2895 12.3023 28.3896 7.52206 22.2077 6.76998Z"
                          fill="#7F1DFE"
                        />
                      </svg>
                      <h6>233.9k</h6>
                    </div>
                    <span className=" text-[#7F7789]">Engagement</span>
                  </div>
                </div>

                {/* intro */}
                <p className="text-[24px] text-[#7F7789]">
                  👋 Hey there, fabulous friends!.
                  <span className="text-woro-blue">
                    {" "}
                    #trending #levelup #flowers #fun #gaming #funny...
                  </span>
                </p>
                {/* btn */}
                <div className="absolute bottom-0 bg-woro-blue w-full text-white justify-center items-center h-[68px] rounded-[3px] flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M7.64773 18.125L3.75 21.1875V5C3.75 4.51675 4.14175 4.125 4.625 4.125H20.375C20.8583 4.125 21.25 4.51675 21.25 5V17.25C21.25 17.7333 20.8583 18.125 20.375 18.125H7.64773ZM7.04247 16.375H19.5V5.875H5.5V17.587L7.04247 16.375ZM11.625 10.25H13.375V12H11.625V10.25ZM8.125 10.25H9.875V12H8.125V10.25ZM15.125 10.25H16.875V12H15.125V10.25Z"
                      fill="white"
                    />
                  </svg>
                  Ask for rights
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UgcCard;
