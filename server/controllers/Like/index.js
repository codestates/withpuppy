const { verifyAccess } = require('../utils/token');
const { User, Pinpointer } = require('../../models');

module.exports = {
  index: async (req, res) => {
    try {
      const pinpointer = await Pinpointer.findOne({
        where: { id: +req.query.pinpointerId },
      });
      const { email } = await pinpointer.getUser({ raw: true });

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(404).json({ message: 'no user' });
      }

      const isLiked = (await user.hasFollower(user.id)) || false;
      const likesCount = (await user.getFollower()).length;

      return res.status(200).json({
        isLiked,
        likesCount,
      });
    } catch (err) {
      console.log(err);
    }
  },
  like: async (req, res) => {
    try {
      const pinpointer = await Pinpointer.findOne({
        where: { id: +req.body.pinpointerId },
      });
      const { email } = await pinpointer.getUser({ raw: true });

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(404).json({ message: 'no user' });
      }

      if (req.body.followerId) {
        await user.addFollower(req.body.followerId);
      }

      return res.status(200).json({});
    } catch (err) {
      console.log(err);
    }
  },
  cancel: async (req, res) => {
    try {
      const pinpointer = await Pinpointer.findOne({
        where: { id: +req.body.pinpointerId },
      });

      const user = await pinpointer.getUser();

      if (!user) {
        return res.status(404).json({ message: 'no user' });
      }

      await user.removeFollower(req.body.followerId);

      return res.status(200).json({});
    } catch (err) {
      console.log(err);
    }
  },
};
