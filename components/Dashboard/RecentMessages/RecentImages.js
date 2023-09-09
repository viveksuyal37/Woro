import Image from "next/image";
import ExpandBtn from "../ExpandBtn";
import classNames from "classnames";

const RecentMessages = () => {
  return (
    <div className="h-[305px] rounded-[20px] p-[14px_11px] bg-white shadow-[ 0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]">
      {/* header*/}
      <div className="flex justify-between">
        <h6 className="font-bold text-[1rem]">Recent Messages</h6>

        <div className="flex gap-[10px]">
          <div className="w-[22px] h-[22px] flex items-center justify-center rounded-full border-black border-[1px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M4.02528 10.0627C4.23549 9.46792 4.80268 9.04183 5.4694 9.04183C6.13611 9.04183 6.70333 9.46792 6.91352 10.0627H12.1048V11.0835H6.91352C6.70333 11.6782 6.13611 12.1043 5.4694 12.1043C4.80268 12.1043 4.23549 11.6782 4.02528 11.0835H1.89648V10.0627H4.02528ZM7.08778 6.48975C7.29797 5.89501 7.86519 5.46891 8.5319 5.46891C9.19861 5.46891 9.76583 5.89501 9.97602 6.48975H12.1048V7.51058H9.97602C9.76583 8.10532 9.19861 8.53141 8.5319 8.53141C7.86519 8.53141 7.29797 8.10532 7.08778 7.51058H1.89648V6.48975H7.08778ZM4.02528 2.91683C4.23549 2.3221 4.80268 1.896 5.4694 1.896C6.13611 1.896 6.70333 2.3221 6.91352 2.91683H12.1048V3.93766H6.91352C6.70333 4.53239 6.13611 4.9585 5.4694 4.9585C4.80268 4.9585 4.23549 4.53239 4.02528 3.93766H1.89648V2.91683H4.02528ZM5.4694 3.93766C5.75129 3.93766 5.97982 3.70914 5.97982 3.42725C5.97982 3.14535 5.75129 2.91683 5.4694 2.91683C5.18751 2.91683 4.95898 3.14535 4.95898 3.42725C4.95898 3.70914 5.18751 3.93766 5.4694 3.93766ZM8.5319 7.51058C8.8138 7.51058 9.04232 7.28207 9.04232 7.00016C9.04232 6.71826 8.8138 6.48975 8.5319 6.48975C8.25 6.48975 8.02148 6.71826 8.02148 7.00016C8.02148 7.28207 8.25 7.51058 8.5319 7.51058ZM5.4694 11.0835C5.75129 11.0835 5.97982 10.855 5.97982 10.5731C5.97982 10.2912 5.75129 10.0627 5.4694 10.0627C5.18751 10.0627 4.95898 10.2912 4.95898 10.5731C4.95898 10.855 5.18751 11.0835 5.4694 11.0835Z"
                fill="#242128"
              />
            </svg>
          </div>

          <ExpandBtn />
        </div>
      </div>

      {/* notifications */}
      <div className="mt-8 text-[14px]">
        {["", "", ""].map((i, indx) => {
          //! add nanoid
          return (
            <div
              key={indx}
              className={classNames(
                " border-[#7F7789] p-[12px_2px] flex gap-[12px] justify-between items-center leading-tight",
                { "border-b-[1px]": indx !== 2 }
              )}
            >
              <div className="flex gap-[12px]">
                <Image
                  alt=""
                  src="/assets/images/dashboard/user.png"
                  width="32"
                  height="32"
                />

                <div className="flex flex-col">
                  <div className="pr-2 max-w-[170px] truncate">
                    <strong> Abhinav:</strong>
                    <span> Hey did you worked?</span>
                  </div>
                  <strong> 2 hrs ago</strong>
                </div>
              </div>

              <Image
                alt=""
                src="/assets/images/dashboard/fb.png"
                width="32"
                height="32"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentMessages;
