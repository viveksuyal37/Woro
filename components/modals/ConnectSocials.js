/* Internal imports */
import { useEffect } from "react";
import Script from "next/script";

/* External imports */
import { GoogleOAuthProvider } from "@react-oauth/google";

/*Custom components */
import LinkedIn from "./SingleSocialAuthUICards/LinkedIn";
import Instagram from "./SingleSocialAuthUICards/Instagram";
import Twitter from "./SingleSocialAuthUICards/Twitter";
import Youtube from "./SingleSocialAuthUICards/Youtube";
import Pintrest from "./SingleSocialAuthUICards/Pintrest";
import Fb from "./SingleSocialAuthUICards/Fb";

const ConnectSocials = ({ overlay, closeModal }) => {
  //initializing fb js sdk
  useEffect(() => {
    console.log("initializing fb js sdk..");
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.NEXT_PUBLIC_APP_ID,
        xfbml: true,
        version: "v18.0",
      });
    };
  }, []);

  const baseClass =
    "fixed flex items-center justify-center inset-0 w-screen h-screen backdrop-blur-[3px]";

  const overlayClass = overlay ? `bg-${overlay}` : "bg-white";

  const finalClassName = `${baseClass} ${overlayClass}`;

  return (
    <>
      {/* overlay */}
      <div style={{ zIndex: 100 }} className={finalClassName}>
        {/* modal */}
        <div
          style={{
            background:
              " linear-gradient(91deg, rgba(255, 255, 255, 0.80) 89%, rgba(255, 255, 255, 0.70) 100%, rgba(255, 255, 255, 0.8) 95.33%)",
          }}
          className="rounded-[20px] p-4 2xl:p-[22px] w-[50vw] 2xl:w-[41.77vw] min-h-[33.3vh] text-center text-woro-blue shadow-[0px_4px_20px_0px_rgba(190,_148,_243,_0.20)]  relative"
        >
          <h1 className="text-xl 2xl:text-[28px] font-medium">
            Connect Your Social Account Now!
          </h1>
          {/*social Auth UI cards container */}
          <div className="flex justify-center 3xl:justify-start child:cursor-pointer child:shadow-md flex-wrap gap-[22px]  mt-[22px]">
            <LinkedIn />
            <Fb />
          
            <GoogleOAuthProvider
              clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH2_CLIENT_ID}
            >
              <Youtube />
            </GoogleOAuthProvider>
            <Instagram />
            <Twitter />
            <Pintrest />
          </div>
          {/* close btn */}
          <div
            title="Close"
            onClick={closeModal}
            className="absolute top-4 2xl:top-[22px] right-[22px] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="2xl:w-[30px] w-5 h-5 2xl:h-[30px]"
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
      {/* fb script */}
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js"
      />
    </>
  );
};

export default ConnectSocials;
