import Image from "next/image";
const Instagram = () => {
  return (
    <div
      style={{
        background:
          " linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 66.01%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className="flex flex-col p-[11px_46px] rounded-[21px] gap-2 items-center justify-center text-[14px] font-bold h-[100px]"
    >
        <div className="bg-white flex items-center justify-center w-[50px] h-[50px] rounded-full shadow-[0px_4px_20px_rgba(190,_148,_243,_0.20)]">
      <Image
        src="/assets/images/dashboard/instagram.png"
        alt="instagram"
        width="22"
        height="22"
      />
    </div>
      <span>Add account</span>
    </div>
  );
};
export default Instagram;
