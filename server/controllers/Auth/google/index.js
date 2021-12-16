const { User, Puppy } = require('../../../models');
const {
  genAccess,
  genRefresh,
  verifyAccess,
  verifyRefresh,
} = require('../../utils/token');
const { hash, decode } = require('../../utils/bycript');
const getGoogleToken = require('./helpers/getToken');
const getGoogleUserInfo = require('./helpers/getUserInfo');

module.exports = {
  signIn: async (req, res) => {
    const { code, social } = req.body;

    try {
      //1. get token from Google
      const {
        data: { access_token },
      } = await getGoogleToken(code);

      //2. get user info from Google token
      const googleUserInfo = await getGoogleUserInfo(access_token);
      const { email, picture: thumbImg } = googleUserInfo.data;
      const nickname = email.split('@')[0];

      //3. varification
      let user = await User.findOne({ where: { email, social } });
      if (!user) {
        user = await User.create({
          social,
          email,
          nickname,
          thumbImg,
        });
      }

      let puppy = await user.getPuppy();
      if (!puppy) {
        const createDefaultPuppy = await Puppy.create({
          puppyName: 'wang',
          age: 1,
          gender: 'female',
          breed: '푸들',
          introduction: '왕왕!',
          puppyProfile:
            'https://raw.githubusercontent.com/chltjdrhd777/chltjdrhd777-final-prototype-imgs/main/puppy.jpeg',
        });
        await user.setPuppy(createDefaultPuppy);
        puppy = await user.getPuppy();
      }

      //4. send data
      const accessToken = genAccess({
        email,
        social,
      });
      const refreshToken = genRefresh({
        email,
        social,
      });
      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      });
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      });
      res.status(200).json({
        id: user.dataValues.id,
        social,
        email,
        nickname,
        thumbImg,
        puppy,
        phone: user.phone,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'google oauth failed' });
    }
  },
};
