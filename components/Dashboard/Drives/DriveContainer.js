import classNames from "classnames";
import DriveCard from "./DriveCard";

const DriveContainer = ({ expandedCard }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className={classNames(
        "flex gap-[10.5px] 2xl:gap-[15px] items-center justify-center rounded-[20px]  shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] overflow-hidden w-full transition-all duration-300 ease-in-out opacity-1",
        { "w-0 h-0 p-0 opacity-0 hidden": expandedCard },
        { "p-[10px] 2xl:p-[14px_15px]": !expandedCard }
      )}
    >
      {!expandedCard &&
        ["", "", ""].map((card, indx) => {
          return <DriveCard key={indx} />;
        })}
    </div>
  );
};

export default DriveContainer;
