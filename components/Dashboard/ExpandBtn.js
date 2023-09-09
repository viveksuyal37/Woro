import Image from "next/image";

const ExpandBtn = () => {
  return (
    <div className="w-[22px] h-[22px] bg-[#454545] flex items-center justify-center rounded-full ">
      <Image
        src="/assets/images/dashboard/expand.png"
        alt="expand button"
        width="12"
        height="12"
      />
    </div>
  );
};

export default ExpandBtn;
