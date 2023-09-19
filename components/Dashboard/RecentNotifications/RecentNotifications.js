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
        " rounded-[20px]   p-[14px_11px] overflow-hidden shadow-[ 0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] transition-all opacity-1 duration-300 ease-in-out",
        { "h-0 w-0 p-0 opacity-0": expandedCard && expandedCard !== cardId },
        { "h-[305px]": !expandedCard }
      )}
    >
      {/* header*/}
      <div className="flex pl-[17px] pr-[9px] justify-between">
        <h6 className="font-bold  text-[1rem]">Recent Notification</h6>

        <ExpandBtn cardId={cardId} />
      </div>

      {/* notifications */}
      <div className="mt-4 text-[14px]">
        {["", "", ""].map((i, indx) => {
          return (
            <div
              key={nanoid(4)}
              className={classNames(
                " border-[#7F7789] p-[12px_2px] flex gap-[12px] items-center leading-tight",
                { "border-b-[1px]": indx !== 2 }
              )}
            >
              <Image
                alt=""
                src="/assets/images/dashboard/fb.png"
                width="32"
                height="32"
              />
              <div className="pr-2">
                your <strong>Post</strong> received <strong>900 likes </strong>
              </div>
              <div className="text-right">5 mins ago</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentNotifications;
