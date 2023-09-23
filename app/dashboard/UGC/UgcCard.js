import Image from "next/image";

const UgcCard = () => {
  return (
    <div className="rounded-[5px] flex flex-col gap-[13px] p-[30px] max-h-[393px] max-w-[463px] border border-[#7F7789] ">
      {/* top */}
      <div className="flex w-[403px] h-[228px] overflow-hidden rounded-[5px] justify-between">
        <Image
          src="/assets/images/dashboard/ugcImg.png"
          alt="ugcImage"
          width="403"
          height="228"
        />
      </div>

      {/* mid */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-[10px]">
          <Image
            src="/assets/images/profile.png"
            alt="profile"
            width="51"
            height="51"
          />
          <div>
            <p>
              <strong>Username</strong>
            </p>
            <p className="text-[#7F7789]">Location</p>
          </div>
          <Image
            className="h-max"
            src="/assets/images/dashboard/fb.png"
            alt="social"
            width="28"
            height="28"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path
            d="M10.1263 25.6771L4.60449 30.0156V7.08333C4.60449 6.39874 5.15948 5.84375 5.84408 5.84375H28.1566C28.8412 5.84375 29.3962 6.39874 29.3962 7.08333V24.4375C29.3962 25.1221 28.8412 25.6771 28.1566 25.6771H10.1263ZM9.26882 23.1979H26.917V8.32292H7.08366V24.9149L9.26882 23.1979ZM15.7607 14.5208H18.2399V17H15.7607V14.5208ZM10.8024 14.5208H13.2816V17H10.8024V14.5208ZM20.7191 14.5208H23.1982V17H20.7191V14.5208Z"
            fill="#7F1DFE"
          />
        </svg>
      </div>

      {/* bottom */}
      <p className="text-[14px] text-[#7F7789] leading-tight ">
        👋 Hey there, fabulous friends!. #trending #levelup #flowers #fun
        #gaming #funny...
      </p>
    </div>
  );
};

export default UgcCard;
