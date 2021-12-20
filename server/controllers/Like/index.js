const { verifyAccess } = require('../utils/token');
const { User } = require('../../models');

module.exports = {
  index: async (req, res) => {
    const { email } = verifyAccess(req.cookies.accessToken);
    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(404).json({ message: 'no user' });
      }

      const followTargetUser = await User.findOne({
        where: {
          nickname: req.query.username,
        },
      });

      const isLiked = (await followTargetUser?.hasFollower(user.id)) || false;
      const likesCount = (await followTargetUser.getFollower()).length;

      return res.status(200).json({
        isLiked,
        likesCount,
      });
    } catch (err) {
      console.log(err);
    }
  },
  like: async (req, res) => {
    const { email } = verifyAccess(req.cookies.accessToken);
    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(404).json({ message: 'no user' });
      }

      const followTargetUser = await User.findOne({
        where: {
          nickname: req.body.username,
        },
      });

      if (!followTargetUser) {
        return res.status(404).json({ message: 'no target user' });
      }

      await followTargetUser.addFollower(user.id);

      return res.status(200).json({});
    } catch (err) {
      console.log(err);
    }
  },
  cancel: async (req, res) => {
    const { email } = verifyAccess(req.cookies.accessToken);
    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(404).json({ message: 'no user' });
      }

      const followTargetUser = await User.findOne({
        where: {
          nickname: req.body.username,
        },
      });

      if (!followTargetUser) {
        return res.status(404).json({ message: 'no target user' });
      }

      await followTargetUser.removeFollower(user.id);

      return res.status(200).json({});
    } catch (err) {
      console.log(err);
    }
  },
};
