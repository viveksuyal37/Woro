/*BuiltIn imports */
import Image from "next/image";

/*custom components */
import ExpandBtn from "../ExpandBtn";

/*External imports */
import classNames from "classnames";
import { nanoid } from "nanoid";

const TrendingNow = ({ cardId, expandedCard }) => {
  return (
    <div
      style={{
        background:
          " linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 53.28%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className={classNames(
        "bg-white  relative rounded-[11px] shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)] opacity-1  overflow-hidden transition-all duration-300 ease-in-out",
        { "w-0 h-0 opacity-0 p-0": expandedCard && expandedCard !== cardId },
        { "w-full h-[66vh] p-8 2xl:p-[41px_46px]": expandedCard === cardId },
        {
          "w-[39.68vw] p-[11px_14px] 2xl:p-[20px_0px_14px_14px] ":
            !expandedCard,
        }
      )}
    >
      {!expandedCard && (
        <div className="mb-[5px] 2xl:mb-[10px] text-[11.5px] 2xl:text-[1rem] flex justify-between mr-[20px]">
          <p className="font-bold text-woro-blue">
            Popular News <span className="font-normal text-black">and</span>{" "}
            Viral topics
          </p>
          <ExpandBtn cardId={cardId} />
        </div>
      )}

      {!expandedCard && (
        <div className="flex w-full ">
          {/* news card*/}
          <div className="flex gap-[10px] 2xl:gap-4 p-[6.44px] 2xl:p-[10px_15px_10px_10px] max-w-[334px] bg-white leading-tight shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.35)]">
            <div className="w-[61px] 2xl:w-[80px] 3xl:w-[90px] flex-shrink-0 ">
              <Image
                className="rounded-[5px]"
                src="/assets/images/news.png"
                alt=""
                width="95"
                height="119"
              ></Image>
            </div>
            <div className="flex flex-col gap-[6px] max-w-[198px]">
              <h6 className="text-[9px] 2xl:text-[14px] max-h-[35px] truncate font-bold">
                "Scientists Make Breakthrough in Renewable Energy Storage”
              </h6>
              <p className="text-[6.5px] 2xl:text-[10px] font-bold">
                <span className="text-[#7F7789] font-normal">By</span> Jackie
                Chen
              </p>
              <p className="text-[9px] 2xl:text-[14px] text-[#7F7789] ">
                <span className="max-w-[170px] ">
                  In a groundbreaking development th{" "}
                </span>
              </p>
              <p className="mt-[2px] text-[5px] 2xl:text-[8px]">
                November 17, 2023
              </p>
            </div>
          </div>
        </div>
      )}

      {expandedCard === cardId && (
        <section className="h-full overflow-y-scroll scrollContainer">
          {/* top Popular */}
          <h1 className="text-2xl 2xl:text-[36px] mb-2 font-bold text-woro-blue w-max">
            Popular
          </h1>
          <div className="flex w-full gap-5 overflow-x-hidden 2xl:gap-8">
            {/* /news cards */}

            {["", "", "", ""]?.map(() => {
              return (
                <div
                  key={nanoid(4)}
                  className="flex flex-col flex-shrink-0 w-[360px] 2xl:w-[502px] gap-[22px]"
                >
                  <div className="bg-[url('/assets/images/newsExpanded.png')] w-full h-[188px] rounded-[10px] bg-cover bg-center"></div>
                  <h2 className="text-xl 2xl:text-[26px] leading-tight 2xl:leading-[29px] font-bold">
                    "Scientists make breakthrough in renewable energy storage”
                  </h2>
                  <div className="flex text-sm 2xl:text-[16px] justify-between">
                    <div className="space-x-2">
                      <span>Guwahati, Assam</span>
                      <span>5h ago</span>
                      <span>November 17, 2023</span>
                    </div>
                    <p>
                      By <strong>Jacki Chen</strong>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* bottom latest News */}

          <h1 className="text-2xl 2xl:text-[36px] mb-2 mt-6 2xl:mt-8 font-bold text-woro-blue w-max">
            Latest News
          </h1>
          <div className="flex w-full gap-5 overflow-x-hidden 2xl:gap-8">
            {/* /news cards */}

            {["", "", "", ""]?.map(() => {
              return (
                <div
                  key={nanoid(4)}
                  className="flex flex-col flex-shrink-0 w-[360px] 2xl:w-[502px] gap-[22px]"
                >
                  <div className="bg-[url('/assets/images/newsExpanded.png')] w-full h-[188px] rounded-[10px] bg-cover bg-center"></div>
                  <h2 className="text-xl 2xl:text-[26px] leading-tight 2xl:leading-[29px] font-bold">
                    "Scientists make breakthrough in renewable energy storage”
                  </h2>
                  <div className="flex text-sm 2xl:text-[16px] justify-between">
                    <div className="space-x-2">
                      <span>Guwahati, Assam</span>
                      <span>5h ago</span>
                      <span>November 17, 2023</span>
                    </div>
                    <p>
                      By <strong>Jacki Chen</strong>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute top-4 right-4">
            <ExpandBtn cardId={cardId} />
          </div>
          <style jsx>
            {`
              .scrollContainer::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
        </section>
      )}
    </div>
  );
};

export default TrendingNow;

<div className="flex gap-8 mt-[46px]">
  {/* left */}
  <div className="flex  font-bold flex-col gap-[22px]">
    {/* title */}
    <div className="text-[36px] text-woro-blue w-max">
      <h1>Latest News</h1>
      <div className="bg-woro-blue h-[7px] width-full rounded-[4px] "></div>
    </div>
    {/* news */}
    <div className="flex items-center pb-[22px] border-b-[2px] border-b-[#7F7789] border-dashed gap-[41px] w-full">
      <div className="max-w-[374px] ">
        <div className="text-[14px] font-normal space-x-2">
          <span>Guwahati, Assam</span>
          <span>5h ago</span>
        </div>
        <h4 className="leading-[18px] mt-[5px]">
          "Scientists make breakthrough in renewable energy storage”{" "}
          <span className="text-woro-blue">read more</span>
        </h4>
      </div>
      <p className="font-normal">
        By <strong>Jacki Chen</strong>
      </p>
    </div>
  </div>
  {/* right */}
  <div className="flex flex-wrap space-x-[46px] space-y-[22px]">
    {/* news card */}
    <div className="flex max-w-[502px] gap-[22px]">
      <div className="flex-shrink-0 bg-[url('/assets/images/newsExpanded.png')] w-[173px] h-[141px] rounded-[10px] bg-cover bg-center"></div>
      <div className="text-[14px] space-y-[15px]">
        <div className="space-x-2 font-normal ">
          <span>Guwahati, Assam</span>
          <span>November 17, 2023</span>
          <span>5h ago</span>
        </div>

        <div className="leading-[16px] space-y-1">
          <p className="font-bold">
            Lorem ipsum dolor sit amet consectetur. Volutpat sed elit nec donec.{" "}
          </p>
          <p>Nam libero dolor risus nec varius cras rhoncus id in. </p>
        </div>

        <p className="font-normal ">
          By <strong>Jacki Chen</strong>
        </p>
      </div>
    </div>
  </div>
</div>;
