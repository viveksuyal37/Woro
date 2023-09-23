/*BuiltIn Imports */
import Link from "next/link";

/*External Imports */
import classNames from "classnames";

const UGC = ({ expandedCard }) => {
  return (
    <Link
      href="/dashboard/UGC"
      style={{
        background:
          "linear-gradient(91deg, rgba(135, 33, 244, 0.30) 8.9%, rgba(194, 63, 168, 0.30) 59.14%, rgba(242, 86, 107, 0.30) 95.33%) ",
      }}
      className={classNames(
        "bg-white rounded-[11px]  transition-all overflow-hidden duration-300 ease-in-out opacity-1  flex justify-end items-center ",
        {
          hidden: expandedCard,
          "h-full w-full p-[20px]": !expandedCard,
        }
      )}
    >
      <div className="flex text-[14px] flex-col">
        <h6 className="text-[18px] font-bold">Introducing UGC</h6>
        <p>User generated Content</p>
      </div>
    </Link>
  );
};

export default UGC;
