export async function GET(request) {
  const appAccessToken = await getAppAccessToken(request);

  // const scopes = await debugToken(
  //   appAccessToken,
  //   request.searchParams.URLSearchParams.token
  // );
  return Response.json({ appAccessToken });
}

const getAppAccessToken = async (request) => {
  const token = request.url.split("token=")[1];

  const res = await fetch(
    `https://graph.facebook.com/v18.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.NEXT_PUBLIC_APP_ID}&client_secret=${process.env.APP_SECRET}&fb_exchange_token=${token}`
  );
  // const res = await fetch(
  //   `https://graph.facebook.com/oauth/access_token?grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_APP_ID}&client_secret=${process.env.APP_SECRET}`
  // );
  console.log("short token", token);
  
  const data = await res.json();
  console.log("node res", data);

  if (!res.ok) {
    throw new Error("App access token failed");
  }

  return data.access_token;
};

// const debugToken = async (appAccessToken, token) => {
//   const res = await fetch(
//     `${FB_GRAPH_URL}debug_token?input_token=${token}&access_token=${appAccessToken}`
//   );

//   const data = await res.json();

//   return data.data.scopes;
// };
