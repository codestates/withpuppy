const { verifyAccess } = require('../utils/token');
const { User, Pinpointer, Puppy, Message } = require('../../models');

module.exports = {
  //핀포인트에 정보 등록 (산책 등록) 여기서는 오직 크리에이트만!!
  enrollPin: async (req, res) => {
    try {
      const longLocation = req.body.location;
      const shortLocation = longLocation.split(' ').slice(0, 3).join(' ');
      const extendedDate = Date.now() + 86400000 * req.body.extend;

      const newPin = {
        location: shortLocation,
        lat: req.body.lat,
        lng: req.body.lng,
        iconType: req.body.icon,
        expire: extendedDate,
        PuppyId: req.body.PuppyId,
        UserId: req.body.UserId,
      };
      await Pinpointer.create(newPin);
      return res
        .status(200)
        .json({ message: 'enroll walking info success!', data: newPin });
    } catch (err) {
      console.log('wrong!');
    }
  },

  //핀포인트랑 옆에 채팅부분을 위한 정보를 싸그리 들고 오는 곳!
  getAllPins: async (req, res) => {
    try {
      let pinpointers = await Pinpointer.findAll();
      for (let i = 0; i < pinpointers.length; i++) {
        if (req.body.level <= 4) {
          pinpointers = pinpointers.filter((el) => {
            return (
              el.dataValues.lat >= req.body.centerLat - 0.009 &&
              el.dataValues.lat <= req.body.centerLat + 0.009 &&
              el.dataValues.lng >= req.body.centerLng - 0.011 &&
              el.dataValues.lng <= req.body.centerLng + 0.011
            );
          });
        } else if (req.body.level === 5 || req.body.level === 6) {
          pinpointers = pinpointers.filter((el) => {
            return (
              el.dataValues.lat >= req.body.centerLat - 0.033 &&
              el.dataValues.lat <= req.body.centerLat + 0.033 &&
              el.dataValues.lng >= req.body.centerLng - 0.041 &&
              el.dataValues.lng <= req.body.centerLng + 0.041
            );
          });
        } else if (req.body.level > 6) {
          pinpointers = pinpointers.filter((el) => {
            return (
              el.dataValues.lat >= req.body.centerLat - 0.09 &&
              el.dataValues.lat <= req.body.centerLat + 0.09 &&
              el.dataValues.lng >= req.body.centerLng - 0.11 &&
              el.dataValues.lng <= req.body.centerLng + 0.11
            );
          });
        }
      }
      let data = pinpointers.slice();
      let dataToSend = Promise.all(
        data.map(async (el, idx) => {
          let puppy = await Puppy.findOne({
            where: { UserId: el.dataValues.UserId },
          });
          let user = await User.findOne({
            where: { id: el.dataValues.UserId },
          });
          //이거 null 값이라 나중에 교체해야함.
          let message = await Message.findAll({
            where: { UserId: el.dataValues.UserId },
          });
          console.log(user.getfollowers);
          // let follow = await user.getfollower();

          let totalObj = {
            puppyName: puppy.dataValues.puppyName,
            puppyProfile: puppy.dataValues.puppyProfile,
            breed: puppy.dataValues.breed,
            age: puppy.dataValues.age,
            gender: puppy.dataValues.gender,
            introduction: puppy.dataValues.introduction,
            nickname: user.dataValues.nickname,
            phone: user.dataValues.phone,
            thumbImg: user.dataValues.thumbImg,
            likeCount: 0,
            messages: message,
          };
          return totalObj;
        }),
      ).then((data) => {
        return res.status(200).json({ message: 'done!', pinpointers, data });
      });
    } catch (err) {
      console.log(err);
    }
  },
};
