const axios = require("axios");
module.exports = async (accessToken) => {
  return await axios.get(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`,
    {
      headers: {
        authorization: `token ${accessToken}`,
        accept: "application/json",
      },
    }
  );
};
