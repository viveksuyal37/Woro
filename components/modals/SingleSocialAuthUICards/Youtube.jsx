"use client";

/* Internal imports */
import Image from "next/image";

/* External imports */
import { useGoogleLogin } from "@react-oauth/google";

const Youtube = () => {
  const login = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/youtube",
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_OAUTH2_CLIENT_REDIRECT,
    onSuccess: (codeResponse) => console.log(codeResponse),
    onError: (errorResponse) => console.log(errorResponse),
    flow: "auth-code",
  });

  return (
    <div
      style={{
        background:
          " linear-gradient(91deg, rgba(255, 255, 255, 0.80) 8.9%, rgba(255, 255, 255, 0.70) 66.01%, rgba(255, 255, 255, 0.50) 95.33%)",
      }}
      className="flex flex-col p-[11px_46px] rounded-[21px] gap-2 items-center justify-center text-[14px] font-bold h-[100px]"
      onClick={login}
    >
      <div className="bg-white flex items-center justify-center w-[50px] h-[50px] rounded-full shadow-[0px_4px_20px_rgba(190,_148,_243,_0.20)]">
        <Image
          src="/assets/images/dashboard/youtube.png"
          alt="instagram"
          width="22"
          height="22"
        />
      </div>
      <span>Add account</span>
    </div>
  );
};

export default Youtube;
