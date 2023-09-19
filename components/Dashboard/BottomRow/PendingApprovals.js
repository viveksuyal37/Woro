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
        "bg-white p-[20px] rounded-[11px] overflow-hidden transition-all duration-300 ease-in-out opacity-1",
        { "w-0 h-0 opacity-0": expandedCard && expandedCard !== cardId },
        { "  w-[30.21vw] max-w-[600px] ": !expandedCard }
      )}
    >
      <div className="flex justify-between mb-4 font-bold">
        <h6 className="text-[1rem]">Pending approvals</h6>
        <div className="flex gap-[10px]">
          <p>5 mins ago</p>
          <ExpandBtn cardId={cardId} />
        </div>
      </div>
      {/* mid row2 */}
      <div className="flex justify-between">
        <div className="flex gap-[18px]">
          <div className="w-[66px] h-[66px] rounded-full">
            <Image
              src="/assets/images/profile.png"
              alt="approval profile"
              width="66"
              height="66"
            />
          </div>
          <div className="flex flex-col self-center">
            <h6 className="text-[18px] font-bold ">Mike</h6>
            <p className="text-woro-blue text-[14px]">Employee</p>
          </div>
        </div>

        <div className="flex flex-col gap-[6px] text-[14px]">
          <p>wants to schedule a post on</p>
          <p className="font-bold">21st August 2023, 10:00AM</p>
        </div>
      </div>

      {/* bottom */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-1">
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
        <div className="flex gap-1 text-white p-[12px_37px] rounded-[3px] bg-woro-blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
    </div>
  );
};

export default PendingApprovals;
