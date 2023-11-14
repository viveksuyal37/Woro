import { nanoid } from "nanoid";
import Image from "next/image";

const ConnectSocials = ({ overlay, closeModal }) => {
  const baseClass =
    "fixed flex items-center justify-center inset-0 w-screen h-screen backdrop-blur-[3px]";

  const overlayClass = overlay ? `bg-${overlay}` : "bg-white";

  const finalClassName = `${baseClass} ${overlayClass}`;

  return (
    // overlay
    <div style={{ zIndex: 100 }} className={finalClassName}>
      {/* modal */}
      <div
        style={{
          background:
            " linear-gradient(91deg, rgba(255, 255, 255, 0.80) 89%, rgba(255, 255, 255, 0.70) 100%, rgba(255, 255, 255, 0.8) 95.33%)",
        }}
        className="rounded-[20px] p-[22px] w-[41.77vw] min-h-[33.3vh] text-center text-woro-blue shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]  relative"
      >
        <h1 className="text-[28px] font-medium">
          Connect Your Social Account Now!
        </h1>
        {/* cards container */}
        <div className="flex  flex-wrap gap-[22px] child:flex child:flex-col child:p-[11px_46px] child:rounded-[21px] child:gap-2 child:items-center child:justify-center child:text-[14px] child:font-bold child:h-[100px] mt-[22px]">
          {Array(8)
            .fill("")
            .map(() => {
              return (
                <div
                  key={nanoid(4)}
                  style={{
                    background:
                      " linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 66.01%, rgba(255, 255, 255, 0.50) 95.33%)",
                  }}
                >
                  <Image
                    src="/assets/images/dashboard/instagram.png"
                    alt="instagram"
                    width="22"
                    height="22"
                  />
                  <span>Add account</span>
                </div>
              );
            })}
        </div>
        {/* close btn */}
        <div
          title="Close"
          onClick={closeModal}
          className="absolute top-[22px] right-[22px] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M15.0001 12.5001L23.75 3.75L26.25 6.25L17.5001 15.0001L26.25 23.75L23.75 26.25L15.0001 17.5001L6.25 26.25L3.75 23.75L12.5001 15.0001L3.75 6.25L6.25 3.75L15.0001 12.5001Z"
              fill="url(#paint0_linear_2177_18417)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2177_18417"
                x1="3.75"
                y1="3.75"
                x2="27.8731"
                y2="5.65074"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7F1DFE" />
                <stop offset="1" stopColor="#464BD3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ConnectSocials;
