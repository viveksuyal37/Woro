import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-full bg-white">
      {/* if empty */}
      <div className="flex flex-col text-sm 2xl:text-[1rem] items-center justify-center w-full h-full gap-2 leading-tight">
        <Image
          src="/assets/images/portfolio/empty-folder.png"
          width="138"
          height="138"
          className="2xl:w-[138px] w-[90px]"
          alt="empty"
        />
          <span className="text-[#C1C1C1]">This place looks empty ...</span>
        <p className="max-w-[150px] text-center text-[1rem] 2xl:text-lg">
          Drag & drop or <span className="text-woro-blue">select a file to upload</span>
        </p>
        <p className="text-[#7F7789] mt-2 text-center text-[11px] 2xl:text-sm max-w-[700px]">The Library serves as a central hub for storing and efficiently organizing all your visual content. You have the freedom to upload as much as you desire and effortlessly synchronize it across all your connected devices.</p>
      </div>
    </div>
  );
};

export default page;
