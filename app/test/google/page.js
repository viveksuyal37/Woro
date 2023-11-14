"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";

import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
// export const getGoogleUrl = (from) => {
//   const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;

//   const options = {
//     redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_OAUTH2_CLIENT_REDIRECT,
//     client_id: process.env.NEXT_PUBLIC_GOOGLE_OAUTH2_CLIENT_ID,
//     access_type: "offline",
//     response_type: "code",
//     prompt: "consent",
//     scope: [
//       "https://www.googleapis.com/auth/userinfo.profile",
//       "https://www.googleapis.com/auth/userinfo.email",
//     ].join(" "),
//     state: from,
//   };

//   const qs = new URLSearchParams(options);

//   return `${rootUrl}?${qs.toString()}`;
// };

const page = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH2_CLIENT_ID}
    >
      {showLogin ? (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      ) : (
        <div className="flex items-center justify-center w-screen h-screen text-white bg-black">
          <div
            onClick={() => {
              setShowLogin(true);
            }}
            className="px-3 py-2 border rounded-md"
          >
            Login with Google
          </div>
        </div>
      )}
    </GoogleOAuthProvider>
  );
};

export default page;
