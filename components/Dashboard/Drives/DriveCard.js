import Image from "next/image";

const DriveCard = () => {
  return (
    <div className="flex w-[85px] flex-col items-center justify-center rounded-[10px] gap-[3px] bg-white p-[3px_24px] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]">
      <Image
        alt=""
        src="/assets/images/dashboard/onedrive.png"
        width="36"
        height="36"
      />

      <div className="bg-woro-blue w-[25px] h-[25px] flex items-center justify-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10.7004 10.6999V2.8999H13.3004V10.6999H21.1004V13.2999H13.3004V21.0999H10.7004V13.2999H2.90039V10.6999H10.7004Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default DriveCard;
