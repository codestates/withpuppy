const getKakaoToken = require("./helpers/getToken");
const getKakaoUserInfo = require("./helpers/getUserInfo");
const { User, Puppy } = require("../../../models");
const { genAccess, genRefresh, verifyAccess, verifyRefresh } = require("../../utils/token");
const { hash, decode } = require("../../utils/bycript");

module.exports = {
  signIn: async (req, res) => {
    const { code } = req.body;

    try {
      //1. get token from kakao
      const { data: tokens } = await getKakaoToken(code);

      //2. get user info from kakao token
      const {
        data: { kakao_account },
      } = await getKakaoUserInfo(tokens.access_token);

      //3. check user
      let user = await User.findOne({ where: { email: kakao_account.email } });

      if (!user) {
        user = await User.create({
          email: kakao_account.email,
          nickname: kakao_account.profile.nickname,
          thumbImg: kakao_account.profile.thumbnail_image_url,
          profileImg: kakao_account.profile.profile_image_url,
        });
      }

      let puppy = await user.getPuppy();

      if (!puppy) {
        const createDefaultPuppy = await Puppy.create({});

        await user.setPuppy(createDefaultPuppy);
        puppy = await user.getPuppy();
      }

      //4. send data
      const accessToken = genAccess({
        email: kakao_account.email,
      });
      const refreshToken = genRefresh({
        email: kakao_account.email,
      });

      res.cookie("accessToken", accessToken, { httpOnly: true });
      res.cookie("refreshToken", refreshToken, { httpOnly: true });
      res.status(200).json({
        email: kakao_account.email,
        nickname: kakao_account.profile.nickname,
        thumbImg: kakao_account.profile.thumbnail_image_url,
        profileImg: kakao_account.profile.profile_image_url,
        phone: user.dataValues.phone,
        puppy,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "kakao auth failed" });
    }
  },
};
