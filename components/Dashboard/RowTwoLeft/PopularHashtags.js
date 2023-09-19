import Image from "next/image";
import ExpandBtn from "../ExpandBtn";
import classNames from "classnames";

const PopularHashtags = ({ cardId, expandedCard }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className={classNames(
        " opacity-1 p-[20px] transition-all duration-300 ease-in-out overflow-hidden rounded-[20px] bg-white",
        {
          "w-0 h-0 opacity-0 p-0": expandedCard && expandedCard !== cardId,
          "h-full  w-[21.9473vw] max-w-[500px]": !expandedCard,
        }
      )}
    >
      <div className="flex justify-between mb-2 gap-[14px] font-bold">
        <h6 className="text-[14px]">
          Popular hastags For your{" "}
          <span className="text-woro-blue">Social Media Accounts!</span>
        </h6>

        <ExpandBtn cardId={cardId} />
      </div>

      {/* trendingHashtagsCard */}
      {/* //! make it a component */}

      <div className="bg-white shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] p-[12px_10px] max-w-[245px] rounded-[10px]">
        <div className="flex justify-between mb-[5px] gap-[23px] font-bold">
          <div className="flex space-x-[5px]">
            <Image
              src="/assets/images/dashboard/fb.png"
              width="20"
              alt=""
              height="20"
            ></Image>
            <h6 className="text-[14px] font-bold"> FaceBook</h6>
          </div>

          <div className="flex space-x-[5px] items-center">
            <input type="checkbox" id="checkbox1"></input>
            <label className="text-[10px] " htmlFor="checkbox1">
              Latest
            </label>
            <input type="checkbox" id="checkbox2"></input>
            <label className="text-[10px] " htmlFor="checkbox2">
              Month
            </label>
          </div>
        </div>

        <div className="flex flex-wrap text-[10px] font-bold text-woro-blue space-x-2">
          <div>#Business</div>
          <div>#Art</div>
          <div>#Passion </div>
          <div>#Levelup</div>
          <div> #Growth</div>
          <div>#Lorem</div>
          <div>#Ipsum</div>
          <div> #Dolor </div>
        </div>
      </div>
    </div>
  );
};

export default PopularHashtags;
