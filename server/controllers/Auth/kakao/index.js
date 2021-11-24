const getKakaoToken = require("./helpers/getToken");
const getKakaoUserInfo = require("./helpers/getUserInfo");
const { User, KakaoSocial } = require("../../../models");
const { genAccess, genRefresh, verifyAccess, verifyRefresh } = require("../../utils/token");
const { hash, decode } = require("../../utils/bycript");

module.exports = {
  login: (req, res) => {},
  logout: (req, res) => {},
  signup: async (req, res) => {
    const { code, socialType } = req.body;

    try {
      //1. get token from kakao
      const { data: tokens } = await getKakaoToken(code);

      //2. get user info from kakao token
      const {
        data: { kakao_account },
      } = await getKakaoUserInfo(tokens.access_token);

      //3. before save
      const checkUser = await User.findOne({ where: { email: kakao_account.email, socialType } });
      if (checkUser) {
        return res.status(409).json({ message: "already exist user" });
      }

      //4. save
      const baseSocialData = {
        nickname: kakao_account.profile.nickname,
        thumbImg: kakao_account.profile.thumbnail_image_url,
        profileImg: kakao_account.profile.profile_image_url,
      };
      const dataToSand = { email: kakao_account.email, socialType };

      const saveUser = await User.create({ email: kakao_account.email, socialType });
      const saveKaKao = await KakaoSocial.create({
        ...baseSocialData,
        refreshToken: tokens.refresh_token,
      });
      saveKaKao.setUser(saveUser);

      //5. send data to client
      const newAccessToken = genAccess(dataToSand);
      const newRefreshToken = genRefresh(dataToSand);
      res.cookie("accessToken", newAccessToken);
      res.cookie("refreshToken", newRefreshToken);
      res.status(201).json({ data: { ...baseSocialData, ...dataToSand } });

      // save
      // hash(tokens.refresh_token, async (err, hashedRefreshToken) => {
      //   if (err) return res.status(500).json({ message: "refresh token hashng failed" });

      //   const baseSocialData = {
      //     nickname: kakao_account.profile.nickname,
      //     thumbImg: kakao_account.profile.thumbnail_image_url,
      //     profileImg: kakao_account.profile.profile_image_url,
      //   };

      //   const saveUser = await User.create({ email: kakao_account.email, socialType });
      //   const saveKaKao = await KakaoSocial.create({
      //     ...baseSocialData,
      //     refreshToken: hashedRefreshToken,
      //   });
      //   await saveUser.addKakaoSocials(saveKaKao);

      //   const dataToSand = { ...baseSocialData, email: kakao_account.email, socialType };
      //   const newAccessToken = genAccess(dataToSand);
      //   const newRefreshToken = genRefresh(dataToSand);
      //   res.cookie("accessToken", newAccessToken);
      //   res.cookie("refreshToken", newRefreshToken);
      //   res.status(201).json({ data: dataToSand });
      // });

      // //         //4. save
      // // const baseSocialData = {
      // //   nickname: kakao_account.profile.nickname,
      // //   thumbImg: kakao_account.profile.thumbnail_image_url,
      // //   profileImg: kakao_account.profile.profile_image_url,
      // // };
      // // const saveUser = await User.create({ email: kakao_account.email, socialType });
      // // const saveKaKao = await KakaoSocial.create(baseSocialData);
      // // saveKaKao.setUser(saveUser);

      // //5. send data to client
      // const dataToSand = { ...baseSocialData, email: kakao_account.email, socialType };
      // const newAccessToken = genAccess(dataToSand);
      // const newRefreshToken = genRefresh(dataToSand);
      // res.cookie("accessToken", newAccessToken);
      // res.cookie("refreshToken", newRefreshToken);
      // res.status(201).json({ data: dataToSand });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "kakao auth failed" });
    }
  },
};
