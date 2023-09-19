import Image from "next/image";

const LeftFooter = () => {
  return (
    <div className="flex flex-col gap-[22px]">
      {/* top */}
      <div className="  w-[377px] h-[47px] p-[6px] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] flex gap-[10px] justify-center items-center bg-woro-blue rounded-[10px_90px_90px_0px] text-white">
        <div>
          <Image
            src="/assets/images/footer/search.png"
            width="24"
            height="24"
            alt="footer"
          />
        </div>
        <div>Bruce, try out our new chatbot WoroGPT!</div>
      </div>

      {/* bottom */}
      <div className="flex items-center justify-between bg-white w-[377px] h-[47px] p-[6px_6px_6px_26px] rounded-[50px] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]">
        <input
          placeholder="Ask us anything"
          className="text-[14px] text-[#455A64] outline-none"
        ></input>

        <div className="flex items-center justify-center w-[35px] h-[35px] rounded-full  bg-gradient-to-r from-[#7F1DFE] to-[#FD5C5C] ">
          <Image
            src="/assets/images/footer/search.png"
            width="16"
            height="16"
            alt="footer"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftFooter;
