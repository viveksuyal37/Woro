import Image from "next/image";

const MessageAside = () => {
  return (
    <aside className="w-[310px] bg-white p-[30px_13px] flex flex-col gap-[46px]">
      {/* message */}
      <div className="relative flex items-center gap-5 border-b border-[#7F7789] py-[22px]">
        {/* left */}
        <Image
          src="/assets/images/profile.png"
          width="50"
          height="50"
          alt="profile"
        />
        {/* right */}
        <div className="w-full">
          <div className="flex items-center space-x-1 text-lg font-bold leading-tight">
            <h6>Jonathan</h6>
            <div className="rounded-full w-2 h-2 bg-[#00FABA]"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="rounded-full w-[6px] h-[6px] bg-[#7F7789]"></div>
            <p className="max-w-[100px] truncate">Hello...</p>
            <div className="rounded-full w-[6px] h-[6px] bg-[#7F7789]"></div>
            <p className="text-[#7F7789]">4hrs</p>
          </div>
        </div>
        {/* active */}
        <div className="absolute w-1 h-[60px] rounded-full -left-3 bg-woro-blue"></div>
      </div>
    </aside>
  );
};

export default MessageAside;
