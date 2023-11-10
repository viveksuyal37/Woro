"use client";

const page = () => {
  const loginHandler = async () => {
    // fb login dialog
    window.FB.login(
      (response) => {
        console.log("response=>", response);

        if (response.status === "connected") {
          console.log("userAccessToken=>", response.authResponse.accessToken);
          fetch(
            `/api/fb/getAppAccessToken?token=${response.authResponse.accessToken}`
          )
            .then((data) => {
              return data.json();
            })
            .then((data) => {
              console.log("appAccessToken", data);
            });
        } else {
          console.log("user aborted login.");
        }
      },
      {
        scope: "public_profile",
        return_scopes: true,
        config_id: process.env.NEXT_PUBLIC_CONFIG_ID,
      }
    );
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen text-white bg-black">
      <button className="px-3 py-2 border rounded-md" onClick={loginHandler}>
        Login
      </button>
    </div>
  );
};

export default page;
