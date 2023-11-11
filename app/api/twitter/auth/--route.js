import axios from "axios";

export async function GET(request) {
  try {
    const response = await axios.post(
      "https://api.twitter.com/oauth/request_token",
      null,
      {
        headers: {
          Authorization: `OAuth oauth_consumer_key="${
            process.env.TWITTER_API_KEY
          }", oauth_nonce=${generateRandomUniqueString()}, oauth_signature_method="HMAC-SHA1", oauth_timestamp="${Math.floor(
            Date.now() / 1000
          )}", oauth_version="1.0"`,
        },
      }
    );

    const data = new URLSearchParams(response.data);

    Response.redirect(`https://api.twitter.com/oauth/authenticate?${data}`);
  } catch (error) {
    console.error("errorrrrrr",error);
    // Response.status(500).json({ error: "Internal Server Error" });
  }
}

function generateRandomUniqueString() {
  const timestamp = new Date().getTime().toString(36);
  const randomString = Math.random().toString(36).substring(2, 15);

  return timestamp + randomString;
}
