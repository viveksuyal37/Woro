import Image from "next/image";

const LeftFooter = () => {
  return (
    <div className="flex w-[254px] text-[10px] 2xl:text-[12px] 3xl:text-[1rem] 2xl:w-[300px] 3xl:w-[365px] flex-col gap-[15px] 3xl:gap-[22px]">
      {/* top */}

      <div className=" w-full  h-[32.5px] 2xl:h-[47px] p-[6px] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] flex gap-1 2xl:gap-[10px] justify-center items-center bg-woro-blue rounded-[10px_90px_90px_0px] text-white">
        <div>
          <Image
            src="/assets/images/footer/search.png"
            width="24"
            height="24"
            className="w-4 2xl:w-6"
            alt="footer"
          />
        </div>
        <span>Bruce, try out our new chatbot WoroGPT!</span>
      </div>

      {/* bottom */}
      <div className="flex items-center justify-between bg-white w-full h-[32.5px] 2xl:h-[47px] p-[6px_6px_6px_26px] rounded-[50px] shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]">
        <input
          placeholder="Ask us anything"
          className="text-[9px] 2xl:text-[14px] text-[#455A64] outline-none"
        ></input>

        <div className="flex items-center justify-center w-[23px] 2xl:w-[35px] h-[23px] 2xl:h-[35px] rounded-full  bg-gradient-to-r from-[#7F1DFE] to-[#FD5C5C] ">
          <Image
            src="/assets/images/footer/search.png"
            width="16"
            height="16"
            className="w-3 2xl:w-4"
            alt="footer"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftFooter;
