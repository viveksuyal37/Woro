import Image from "next/image";

const AddSocials = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-[20px] border-2 border-[#263238] border-dashed w-[174px] gap-[10px]">
      {/* add btn*/}
      <div className="bg-woro-blue w-[40px] h-[40px] flex items-center justify-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10.7004 10.6999V2.8999H13.3004V10.6999H21.1004V13.2999H13.3004V21.0999H10.7004V13.2999H2.90039V10.6999H10.7004Z"
            fill="white"
          />
        </svg>
      </div>

      {/* bottom text*/}
      <div className="text-[14px] text-[#7F7789]">Add socials</div>
    </div>
  );
};

export default AddSocials;
