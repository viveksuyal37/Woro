import Image from "next/image";
import ExpandBtn from "../ExpandBtn";
import classNames from "classnames";

const PendingApprovals = ({ cardId, expandedCard }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className={classNames(
        "bg-white h-full flex-shrink-0 rounded-[11px] overflow-hidden transition-all duration-300 ease-in-out opacity-1",
        { "w-0 h-0 opacity-0": expandedCard && expandedCard !== cardId },
        { "w-full min-h-[66vh] h-[66vh] p-6 2xl:p-[46px]":  expandedCard === cardId },
        { "flex flex-col justify-between  w-[30.21vw] max-w-[700px] 5xl:max-w-[900px] p-[13px] 2xl:p-[20px] ": !expandedCard }
      )}
    >
      {/* top */}
      <div className="flex justify-between mb-2 font-bold 3xl:mb-4">
        <h6
          className={classNames("text-[10.5px] 2xl:text-[1rem]", {
            "text-xl 2xl:text-[24px]": cardId === expandedCard,
          })}
        >
          Pending approvals
        </h6>
        <div className="flex text-[11.5px] 2xl:text-[1rem] gap-[10px]">
          {!expandedCard && <p>5 mins ago</p>}
          <ExpandBtn cardId={cardId} />
        </div>
      </div>

      {/* mid row2 */}
      {!expandedCard && (
        <div className="flex justify-between">
          <div className="flex gap-[12px] 2xl:gap-[18px]">
            <div className="w-[43px] 2xl:w-[55px] 3xl:w-[66px] rounded-full">
              <Image
                src="/assets/images/profile.png"
                alt="approval profile"
                width="66"
                height="66"
              />
            </div>
            <div className="flex flex-col self-center">
              <h6 className="text-[11.5px] 2xl:text-[18px] font-bold ">Mike</h6>
              <p className="text-woro-blue text-[9px] 2xl:text-[14px]">
                Employee
              </p>
            </div>
          </div>

          <div className="flex self-center flex-col gap-0 3xl:gap-[6px] text-[9px] 2xl:text-[14px]">
            <p>wants to schedule a post on</p>
            <p className="font-bold">21st August 2023, 10:00AM</p>
          </div>
        </div>
      )}

      {/* bottom */}
      {!expandedCard && (
        <div className="flex items-center justify-between mt-2 2xl:mt-4">
          <div className="flex gap-1 child:w-[27px] child:2xl:w-[38px] child:4xl:w-[45px]">
            <Image
              src="/assets/images/dashboard/fb.png"
              width="38"
              alt=""
              height="38"
            ></Image>
            <Image
              src="/assets/images/dashboard/instagram.png"
              width="32"
              alt=""
              height="30"
            ></Image>
            <Image
              src="/assets/images/dashboard/fb.png"
              width="38"
              alt=""
              height="38"
            ></Image>
          </div>
          <div className="flex gap-1 items-center text-[10px] 2xl:text-[1rem] text-white  p-[8px_24px] 2xl:p-[12px_37px] rounded-[3px] bg-woro-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="w-[15.5px] h-[15.5px] 2xl:h-[24px] 2xl:w-[24px]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
                fill="white"
              />
            </svg>
            Approve
          </div>
        </div>
      )}

      {/* approvals */}
      {expandedCard === cardId && (
        <div className="flex justify-between py-4 2xl:py-[22px] border-b border-b-[#7F7789]">
          <div className="flex items-center gap-6 2xl:gap-8">
            <div className="w-10 2xl:w-[58px]  rounded-full">
              <Image
                src="/assets/images/profile.png"
                alt="approval profile"
                width="58"
                height="58"
              />
            </div>
            <div className="flex flex-col self-center">
              <h6 className="text-sm 2xl:text-[18px] font-bold ">Mike</h6>
              <p className="text-woro-blue text-[9px] 2xl:text-[14px]">Employee</p>
            </div>
            <div className="text-[12px] 2xl:text-[14px] leading-tight">
              <p>wants to schedule a post on</p>
              <p>
                <strong>21st August 2023, 10:00AM</strong>
              </p>
            </div>
            <div className="flex gap-[10px] child:2xl:w-[38px] child:w-[28px] items-center">
              <Image
              
                src="/assets/images/dashboard/fb.png"
                width="38"
                alt=""
                height="38"
              ></Image>
              <Image
                src="/assets/images/dashboard/instagram.png"
                width="32"
                alt=""
                height="30"
              ></Image>
              <Image
                src="/assets/images/dashboard/fb.png"
                width="38"
                alt=""
                height="38"
              ></Image>
              <p>+2</p>
            </div>
          </div>
          <div className="flex text-lg 2xl:text-[24px] text-[#455A64]  gap-[22px] items-center">
            <p>5 mins ago</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
             className="w-8 h-8 2xl:w-11 2xl:h-11"
              viewBox="0 0 45 45"
              fill="none"
            >
              <path
                d="M13.222 34.1701L6.07617 39.7847V10.1076C6.07617 9.22164 6.79439 8.50342 7.68034 8.50342H36.5553C37.4413 8.50342 38.1595 9.22164 38.1595 10.1076V32.5659C38.1595 33.4519 37.4413 34.1701 36.5553 34.1701H13.222ZM12.1124 30.9618H34.9512V11.7118H9.28451V33.1837L12.1124 30.9618ZM20.5137 19.7326H23.722V22.9409H20.5137V19.7326ZM14.097 19.7326H17.3053V22.9409H14.097V19.7326ZM26.9303 19.7326H30.1387V22.9409H26.9303V19.7326Z"
                fill="#7F1DFE"
              />
            </svg>
            <div className="flex items-center gap-2  text-sm 2xl:text-[1rem] text-white p-[8px_20px] 2xl:p-[12px_37px] rounded-[3px] bg-woro-blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
               className="w-4 h-4 2xl:w-6 2xl:h-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
                  fill="white"
                />
              </svg>
              Approve
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
             className="w-10 h-10 2xl:w-16 2xl:h-16"
              viewBox="0 0 68 68"
              fill="none"
            >
              <path
                d="M34.0586 30.2641L45.0895 19.2333L48.7664 22.9102L37.7355 33.9411L48.7664 44.9719L45.0895 48.6489L34.0586 37.618L23.0277 48.6489L19.3508 44.9719L30.3816 33.9411L19.3508 22.9102L23.0277 19.2333L34.0586 30.2641Z"
                fill="#C1C1C1"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingApprovals;
