import axios from "axios";

export async function POST(request) {
  const code = request.url.split("code=")[1];

  console.log("code--------", code);

  const res = await axios.post(
    `https://www.linkedin.com/oauth/v2/accessToken?code=${code}&grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID}&client_secret=rren92FewiEVpoNY&redirect_uri=${process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URI}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log(res);
}
