"use client";

import Script from "next/script";

import { useEffect } from "react";

const layout = ({ children }) => {
  //initializing the fb js sdk
  useEffect(() => {
    window.fbAsyncInit = function () {
  
      window.FB.init({
        appId: process.env.NEXT_PUBLIC_APP_ID,
        xfbml: true,
        version: "v18.0",
      });
     window.FB.AppEvents.logPageView();   
    };
  }, []);

  return (
    <>
      {children}
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js"
      />
    </>
  );
};

export default layout;
