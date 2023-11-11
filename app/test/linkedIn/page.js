"use client";

import { useLinkedIn } from "react-linkedin-login-oauth2";

const page = () => {
  const { linkedInLogin } = useLinkedIn({
    clientId: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
    // redirectUri: `http://localhost:3000/dashboard`,

    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <div className="flex items-center justify-center w-screen h-screen text-white bg-black">
      <button onClick={linkedInLogin} className="px-3 py-2 border rounded-md">
        Login with LinkedIn
      </button>
    </div>
  );
};

export default page;
