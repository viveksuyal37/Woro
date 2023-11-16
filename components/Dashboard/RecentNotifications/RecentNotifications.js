/*BuiltIn imports */
import Image from "next/image";

/*External imports */
import classNames from "classnames";
import { nanoid } from "nanoid";

/*custom components */
import ExpandBtn from "../ExpandBtn";

const RecentNotifications = ({ cardId, expandedCard }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className={classNames(
        " rounded-[20px]  overflow-hidden shadow-[ 0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] transition-all opacity-1 duration-300 ease-in-out",
        { "hidden opacity-0": expandedCard && expandedCard !== cardId },
        { "h-[66vh] p-6 2xl:p-[46px]": expandedCard === cardId },
        {
          "min-h-[213px] 2xl:min-h-[305px] h-[34.35vh] p-[14px_7px] 2xl:p-[14px_11px]":
            !expandedCard,
        }
      )}
    >
      {/* header*/}
      <div className="flex pl-[17px]  justify-between">
        <h6
          className={classNames("font-bold ", {
            "text-xl 2xl:text-[24px]": cardId === expandedCard,
            "text-[11px] 2xl:text-[1rem]": !expandedCard,
          })}
        >
          Recent Notification
        </h6>

        <ExpandBtn cardId={cardId} />
      </div>

      {/* notifications */}
      <div className="2xl:mt-4 h-[260px] scrollContainer ">
        {["", "", "", "", "", ""].map((i, indx) => {
          if (cardId !== expandedCard) {
            return (
              <div
                key={nanoid(4)}
                className={classNames(
                  " border-[#7F7789] text-[10px] 2xl:text-[14px] p-[6px_2px] 2xl:p-[12px_2px] flex gap-2 2xl:gap-[12px] items-center leading-tight",
                  { "border-b-[1px]": indx !== 5 }
                )}
              >
                <Image
                  alt=""
                  src="/assets/images/dashboard/fb.png"
                  width="32"
                  height="32"
                  className="w-5 2xl:w-8"
                />
                <div className="pr-2">
                  your <strong>Post</strong> received{" "}
                  <strong>900 likes </strong>
                </div>
                <div className="text-right">5 mins ago</div>
              </div>
            );
          } else {
            return (
              <div
                key={nanoid(4)}
                className={classNames(
                  " border-[#7F7789] text-[1rem] 2xl:text-[24px] justify-between p-[16px_24px] 2xl:p-[22px_30px] flex gap-[12px] items-center leading-tight",
                  { "border-b-[1px]": indx !== 5 }
                )}
              >
                <div className="flex gap-[22px] items-center">
                  {" "}
                  <Image
                    alt=""
                    src="/assets/images/profile.png"
                    width="58"
                    height="58"
                    className="w-[40px] 2xl:w-[58px]"
                  />
                  <div className="pr-2">
                    your <strong>Post</strong> received{" "}
                    <strong>900 likes </strong>
                  </div>{" "}
                </div>

                <div className="flex items-center text-[#455A64] gap-[22px]">
                  <p>2 hrs ago</p>
                  <Image
                    alt=""
                    src="/assets/images/dashboard/fb.png"
                    width="58"
                    height="58"
                    className="w-[40px] 2xl:w-[58px]"
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
      <style jsx>
        {`
          .scrollContainer {
            width: 100%;
            overflow: auto;
            height: 90%;
          }
          .scrollContainer::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default RecentNotifications;
