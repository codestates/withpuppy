const { genAccess, verifyAccess, verifyRefresh } = require("../controllers/utils/token");
const { User } = require("../models");

module.exports = (req, res, next) => {
  try {
    //1. if access token valid
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    //! 엑세스 토큰이 만료되지 않았으면
    if (verifyAccess(accessToken)) {
      const { email } = verifyAccess(accessToken);

      //if no user
      const user = User.findOne({ where: { email } });
      if (!user) return res.status(404).json({ message: "no user" });

      //else
      //req.accessToken = accessToken;
      next();
    } else if (verifyRefresh(refreshToken)) {
      //! 엑세스 토큰이 만료되었으나 리프레시 토큰이 만료되지 않았으면
      const { email } = verifyRefresh(refreshToken);

      //if no user
      const user = User.findOne({ where: { email } });
      if (!user) return res.status(404).json({ message: "no user" });

      //else
      const newAccessToken = genAccess({ email });
      res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
      });
      // req.accessToken = newAccessToken;
      next();
    } else {
      //! 리프레시 토큰마저 만료되었을 때
      return res.status(401).json({ message: "no valid authorization. please login again" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "token validation process failed" });
  }
};
