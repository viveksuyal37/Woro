const ChatWithUs = () => {
  return (
    <div className="w-[255px] 2xl:min-w-[290px] 3xl:min-w-[365px] h-full  bg-woro-blue rounded-[11px] p-4 3xl:p-[25px] flex justify-between items-center">
      <div className="flex flex-col text-[9px] 3xl:text-[14px] gap-1 2xl:gap-[7px] leading-tight text-white max-w-[130px] 3xl:max-w-[180px] ">
        <h6 className="font-bold  text-[10px] 2xl:text-[1rem]">
          Chat with us!
        </h6>
        <p>Lorem ipsum dolor sit amet consectetur. Sagittis quis</p>
      </div>

      <button className="rounded-sm text-[9px] 2xl:text-[11px] 3xl:text-[1rem] text-woro-blue p-[10px_14px]  3xl:p-[14px_21px]  bg-white h-[33px] 3xl:h-[48px]">
        Learn more
      </button>
    </div>
  );
};

export default ChatWithUs;
