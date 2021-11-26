const getKakaoToken = require("./helpers/getToken");
const getKakaoUserInfo = require("./helpers/getUserInfo");
const { User, Puppy } = require("../../../models");
const { genAccess, genRefresh, verifyAccess, verifyRefresh } = require("../../utils/token");
const { hash, decode } = require("../../utils/bycript");

//그냥 유저 정보를 데이터베이스에 저장하는게 아니라(서버 부담)
// 엑세스 토큰과 리프레시 토큰 자체를 bycript로 암호화한다.
// 그리고 서버는 그 암호화된 토큰을 풀어서 인증을 완료한다.

module.exports = {
  signIn: async (req, res) => {
    const { code, socialType } = req.body;

    try {
      //1. get token from kakao
      const { data: tokens } = await getKakaoToken(code);

      //2. get user info from kakao token
      const {
        data: { kakao_account },
      } = await getKakaoUserInfo(tokens.access_token);

      //3. check user
      let user = await User.findOne({ where: { email: kakao_account.email, socialType } });

      if (!user) {
        await User.create({
          email: kakao_account.email,
          socialType,
        });

        user = await User.findOne({ where: { email: kakao_account.email, socialType } });
      }

      let puppies = await user.getPuppies();

      if (!puppies.length) {
        const createPuppy = await Puppy.create({
          name: "왕왕이",
          age: 1,
          breed: "진돗개",
        });

        await user.setPuppies(createPuppy);
        puppies = await user.getPuppies();
      }

      //4. data send
      const baseSocialData = {
        email: kakao_account.email,
        socialType,
        nickname: kakao_account.profile.nickname,
        thumbImg: kakao_account.profile.thumbnail_image_url,
        profileImg: kakao_account.profile.profile_image_url,
        phone: user.dataValues.phone,
        puppies,
      };

      hash(tokens.access_token, (err, hashedAccessToken) => {
        if (err) return res.status(500).json({ message: "hashing accessToken failed" });

        hash(tokens.refresh_token, (err, hashedRefreshToken) => {
          if (err) return res.status(500).json({ message: "hashing refreshToken failed" });

          res.cookie("accessToken", hashedAccessToken);
          res.cookie("refreshToken", hashedRefreshToken);
          res.status(200).json({ data: baseSocialData });
        });
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "kakao auth failed" });
    }
  },
};
