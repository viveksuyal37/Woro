export async function GET(request) {
  const appAccessToken = await getAppAccessToken();

  // const scopes = await debugToken(
  //   appAccessToken,
  //   request.searchParams.URLSearchParams.token
  // );
  return Response.json({ appAccessToken });
}

const getAppAccessToken = async () => {
  const res = await fetch(
    `https://graph.facebook.com/oauth/access_token?grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_APP_ID}&client_secret=${process.env.APP_SECRET}`
  );

  const data = await res.json();

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
