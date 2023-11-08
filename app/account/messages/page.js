import Image from "next/image";

const page = () => {
  return (
    <div className="w-full relative h-full bg-white rounded-[10px] p-[22px_46px_46px_46px]">
      {/* top */}
      <div className="relative flex items-center gap-5 border-b border-[#7F7789] pb-[22px]">
        {/* left */}
        <Image
          src="/assets/images/profile.png"
          width="74"
          height="74"
          alt="profile"
        />
        {/* right */}
        <div className="w-full">
          <div className="flex items-center space-x-2 text-lg font-bold leading-tight">
            <h6>Jonathan</h6>
            <div className="rounded-full w-2 h-2 bg-[#00FABA]"></div>
          </div>

          <p>Online</p>
        </div>
      </div>

      {/* message container */}
      <div className="w-full mt-8 scrollableContainer overflow-auto h-[35vh]">
        {/* message --other */}
        <div className="flex gap-5">
          <div>
            <Image
              src="/assets/images/profile.png"
              width="49"
              height="49"
              alt="profile"
            />
          </div>
          <div className="flex flex-col text-sm gap-4 child:w-max child:max-w-[213px] child:p-4 child:bg-[#F2EAFD]">
            <p className="rounded-[0px_20px_20px_20px]">
              Lorem ipsum dolor sit amet consectetur. Sit lorem mi posuere
              faucibus gravida faucibus vitae.
            </p>
            <p className="rounded-full">Ullamcorper sed orci</p>
          </div>
        </div>

        {/* message --you */}
        <div className="flex justify-end w-full gap-5">
          <div className="flex flex-col items-end text-white  text-sm gap-4 child:w-max child:max-w-[213px] child:p-4 child:bg-woro-blue">
            <p className="rounded-[20px_0px_20px_20px]">Hi</p>
            <p className="rounded-full">What's up?</p>
            <p className="rounded-full">Any plans for the weekend?</p>
          </div>
          <div>
            <Image
              src="/assets/images/profile.png"
              width="49"
              height="49"
              alt="profile"
            />
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex w-full absolute  bottom-[46px] left-0 px-[46px] h-[50px] gap-[22px] items-center justify-between">
        <input
          type="text"
          placeholder="Type something"
          className="h-full w-full text-[#7F7789] p-[15px_40px] rounded-full bg-[rgba(190,_148,_243,_0.20)]"
        ></input>
        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-woro-blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 4L2 10.6971L11.4737 12.5302L13.8446 22L20 4Z"
              stroke="white"
              strokeWidth="1.89474"
              strokeLinejoin="round"
            />
            <path
              d="M11.4766 12.5304L14.1561 9.85083"
              stroke="white"
              strokeWidth="1.89474"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default page;
