const axios = require("axios");
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URL } = process.env;

module.exports = async (code) => {
  const data = {
    code,
    grant_type: "authorization_code",
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: GOOGLE_REDIRECT_URL || "http://localhost:3000/oauth/google",
  };

  const queryString =
    "https://oauth2.googleapis.com/token?" +
    Object.keys(data)
      .map((key) => `${key}=${data[key]}`)
      .join("&");

  return await axios.post(queryString);
};
