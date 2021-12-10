const getKakaoToken = require("./helpers/getToken");
const getKakaoUserInfo = require("./helpers/getUserInfo");
const { User, Puppy } = require("../../../models");
const { genAccess, genRefresh } = require("../../utils/token");

module.exports = {
  signIn: async (req, res) => {
    const { code, social } = req.body;

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
          social,
          email: kakao_account.email,
          nickname: kakao_account.profile.nickname,
          thumbImg: kakao_account.profile.thumbnail_image_url,
          profileImg: kakao_account.profile.profile_image_url,
        });
      }

      let puppy = await user.getPuppy();

      if (!puppy) {
        const createDefaultPuppy = await Puppy.create({
          puppyName: "wang",
          age: 1,
          gender: "female",
          breed: "푸들",
          introduction: "왕왕!",
          puppyProfile:
            "https://raw.githubusercontent.com/chltjdrhd777/chltjdrhd777-final-prototype-imgs/main/puppy.jpeg",
        });

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
        id: user.dataValues.id,
        social,
        email: kakao_account.email,
        nickname: kakao_account.profile.nickname,
        thumbImg: user.dataValues.thumbImg,
        profileImg: kakao_account.profile.profile_image_url,
        phone: user.dataValues.phone,
        puppy,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "kakao oauth failed" });
    }
  },
};
