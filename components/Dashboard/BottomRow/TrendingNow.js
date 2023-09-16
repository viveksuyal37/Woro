import Image from "next/image";

const TrendingNow = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className="bg-white rounded-[11px] w-[39.68vw] shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] p-[20px_0px_14px_14px]"
    >
      <p className="mb-[10px] font-bold text-woro-blue">
        Popular News <span className="font-normal text-black">and</span> Viral
        topics
      </p>

      <div className="flex w-full ">
        {/* news */}
        <div className="flex gap-4 p-[10px_15px_10px_10px] max-w-[334px] bg-white leading-tight shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.35)]">
          <div className="w-[95px] flex-shrink-0 ">
            <Image
              className="rounded-[5px]"
              src="/assets/images/news.png"
              alt=""
              width="95"
              height="119"
            ></Image>
          </div>
          <div className="flex flex-col gap-[6px] max-w-[198px]">
            <h6 className="text-[14px] max-h-[35px] truncate font-bold">
              "Scientists Make Breakthrough in Renewable Energy Storage”
            </h6>
            <p className="text-[10px] font-bold">
              <span className="text-[#7F7789] font-normal">By</span> Jackie Chen
            </p>
            <p className="text-[14px] text-[#7F7789] ">
              <span className="max-w-[170px] ">
                In a groundbreaking development th{" "}
              </span>
            </p>
            <p className="mt-[2px] text-[8px]">November 17, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
