import Image from "next/image";

const SocialMediaCard = () => {
  return (
    <div
      style={{
        background:
          " linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className="flex flex-col leading-tight gap-1 2xl:gap-2 justify-center items-center rounded-[20px] w-[161px] 2xl:w-[171px] shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]"
    >
      {/* top */}
      <div className="flex items-center gap-[7px]">
        <div className="w-[21px] 2xl:w-[29px]">
          <Image
            alt={""}
            width="29"
            height="29"
            src="/assets/images/dashboard/instagram.png"
          />
        </div>
        <div className="flex flex-col text-[10px] 2xl:text-[14px]">
          <h5>Instagram</h5>
          <p className="font-bold">@username</p>
        </div>
      </div>

      {/* bottom */}
      <div className="text-[11px] 2xl:text-[14px]">
        <span className="text-[#7E1CFD] text-[14px] 2xl:text-[18px]">+20%</span> followers
      </div>
    </div>
  );
};

export default SocialMediaCard;
