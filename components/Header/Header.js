import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        {/* left */}

        <div className="flex items-end space-x-[55px] 2xl:space-x-[78px]">
          <div className="w-[124px] h-[29.5px] 2xl:w-[177px] 2xl:h-[42px]">
            <Image
              src="/assets/images/logo.png"
              alt="woro logo"
              width="177"
              height="42"
            />
          </div>
          <div className="text-2xl font-bold text-woro-blue 2xl:text-4xl">
            Welcome back, Vivek
          </div>
        </div>
        {/* right */}
        <div className="flex items-center gap-[22px] ">
          {/* get support */}
          <button className="rounded-full text-[13px] 2xl:text-[18px]  font-bold text-[#7F1DFE] border 2xl:border-2 border-[#7F1DFE] p-[9px_16px] 2xl:p-[13px_24px] h-[35px] 2xl:h-[49px] leading-[0px] ">
            Get Support Now
          </button>
          <button className="rounded-full text-[12px] 2xl:text-[18px] text-[#7F1DFE] font-bold border-2 border-[#7F1DFE] w-[35px]  h-[35px] 2xl:w-[49px]  2xl:h-[49px] ">
            ?
          </button>

          {/* user profile card */}
          <Link href="/account">
            <div
              style={{
                background:
                  "linear-gradient(139deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.70) 51.35%, rgba(255, 255, 255, 0.50) 100%)",
              }}
              className="flex cursor-pointer space-x-2 2xl:space-x-4 items-center p-[6px_19px_6px_14px] rounded-[20px] shadow-[_0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]"
            >
              {/* profile */}
              <div className="w-[35px] 2xl:w-[50px]  h-[35px] 2xl:h-[50px]">
                <Image
                  src="/assets/images/profile.png"
                  width="50"
                  height="50"
                  alt="profile"
                />
              </div>

              {/* username and role */}
              <div className="flex-col 2xl:space-y-[5px]">
                <div className=" flex space-x-[4px] 2xl:space-x-[6px]">
                  <h6 className="text-[13px] 2xl:text-[18px] flex font-bold">
                    Vivek Suyal
                  </h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.6 22.5L6.7 19.3L3.1 18.5L3.45 14.8L1 12L3.45 9.2L3.1 5.5L6.7 4.7L8.6 1.5L12 2.95L15.4 1.5L17.3 4.7L20.9 5.5L20.55 9.2L23 12L20.55 14.8L20.9 18.5L17.3 19.3L15.4 22.5L12 21.05L8.6 22.5ZM10.95 15.55L16.6 9.9L15.2 8.45L10.95 12.7L8.8 10.6L7.4 12L10.95 15.55Z"
                      fill="#7E1CFD"
                    />
                  </svg>
                </div>
                <p className="text-[9px] 2xl:text-[14px] text-woro-blue">
                  Admin
                </p>
              </div>

              {/* plan icon */}
              <div
                style={{
                  background:
                    "linear-gradient(225deg, #B500C3 21.66%, #9D51FF 76.10%)",
                }}
                className="flex items-center justify-center w-[28px]  2xl:w-[32px] h-[28px]  2xl:h-[32px] rounded-full"
              >
                <Image
                  src="/assets/images/plan1.png"
                  alt="plan badge"
                  width="25"
                  height="25"
                />
              </div>

              {/*dropdown icon */}
              <div className="ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 2xl:w-6 2xl:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
