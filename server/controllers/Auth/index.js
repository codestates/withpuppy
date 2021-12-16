const {
  genAccess,
  genRefresh,
  verifyAccess,
  verifyRefresh,
} = require('../utils/token');
const { User, Puppy } = require('../../models');
const { hash, decode } = require('../utils/bycript');

module.exports = {
  signIn: async (req, res) => {
    try {
      //1. user exist
      const { email, password } = req.body;

      const user = await User.findOne({
        where: { email: email, social: null },
      });
      if (!user) return res.status(404).json({ message: 'no user' });

      //2. password verification
      decode(password, user.password, async (err, result) => {
        if (err) return res.status(500).json({ message: 'decode failed' });
        if (!result) return res.status(409).json({ message: 'wrong password' });

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

        const accessToken = genAccess({
          email,
          social: null,
        });
        const refreshToken = genRefresh({
          email,
          social: null,
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

        // delete user.dataValues.id;
        delete user.dataValues.password;
        delete user.dataValues.createdAt;
        delete user.dataValues.updatedAt;

        return res.status(200).json({
          ...user.dataValues,
          puppy,
        });
      });
    } catch (err) {
      return res.status(503).json({ message: 'unexpected server error' });
    }
  },
  signOut: (req, res) => {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    try {
      return res.status(200).json({ message: 'logout success' });
    } catch (err) {
      return res.status(500).json({
        message: 'logout failed',
      });
    }
  },
  signup: async (req, res) => {
    //1. email validation
    const { nickname, email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user) return res.status(409).json({ message: 'user already exist' });

    //2.add user
    hash(password, async (err, hashedPassword) => {
      if (err)
        return res.status(500).json({ message: 'password hashing failed' });

      try {
        await User.create({
          nickname,
          email,
          password: hashedPassword,
          thumbImg:
            'https://raw.githubusercontent.com/chltjdrhd777/chltjdrhd777-final-prototype-imgs/main/defaultImg.jpeg',
        });
        const accessToken = genAccess({
          email,
        });
        const refreshToken = genRefresh({
          email,
        });
        res.cookie('accessToken', accessToken, {
          httpOnly: true,
        });
        res.cookie('refreshToken', refreshToken, {
          httpOnly: true,
        });
        res.status(201).json({ message: 'signup success' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'add user to database failed' });
      }
    });
  },
  getAccessToken: async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    //1. refresh token check
    const checkRefresh = verifyRefresh(refreshToken);
    if (!checkRefresh) {
      return res
        .status(401)
        .json({ message: 'no refresh token or expired. plase login again' });
    }

    //2. regenerate refresh token
    try {
      //if there is no user
      const { email } = checkRefresh;
      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(401).json({ message: 'no user' });

      //else
      delete user.dataValues.password;
      const newAccessToken = genAccess(user.dataValues);

      res.cookie('accessToken', newAccessToken, {
        httpOnly: true,
      });
      res.status(200).json({ message: 'access token refreshed' });
    } catch (err) {
      console.log(err);
    }
  },
};
