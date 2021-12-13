const { verifyAccess } = require("../utils/token");
const { User, Pinpointer, Puppy } = require("../../models");

module.exports = {
  //핀포인트에 정보 등록 (산책 등록)
  enrollPin: async (req, res) => {
    const { email } = verifyAccess(req.accessToken);
    try {
      //해당 유저를 찾기
      const user = await User.findOne({
        where: {
          email,
        },
      });
      //해당 유저가 존재하지 않는 경우
      if (!user) return res.status(404).json({ message: "there is no user" });
      //해당 유저가 존재하는 경우
      else {
        //userId와 일치하는 핀포인터 정보
        const pinInfo = await Pinpointer.findOne({
          where: { UserId: user.id },
        });
        //핀정보가 존재하지 않는 경우
        if (!pinInfo) return res.status(404).json({ message: "no pinInfo" });
        else {
          //핀포인트 정보 업데이트
          await Pinpointer.update({
            location: req.body.location,
            iconType: req.body.iconType,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  },
  //핀포인트 정보 가져오기 (오버레이)
  getPinInfo: async (req, res) => {
    const { email } = verifyAccess(req.accessToken);
    try {
      //해당 유저를 찾기
      const user = await User.findOne({
        where: {
          email,
        },
      });
      //해당 유저가 존재하지 않는 경우
      if (!user) return res.status(404).json({ message: "there is no user" });
      else {
        //userId와 일치하는 핀포인터 정보 가져오기. (강아지 이름이랑 자기 닉네임을 가져와야함.)
        //강아지 찾기 (UserId가 user.id와 일치하는 유저의 강아지)
        const puppyInfo = await Puppy.findOne({
          where: { UserId: user.id },
        });
        //존재하지 않는 경우
        if (!puppyInfo) return res.status(404).json({ message: "no Info" });
        else {
          return res.status(200).json({
            nickname: user.nickname,
            puppyName: user.puppyName,
            breed: user.breed,
            puppyInfo: puppy.introduction,
            age: puppy.age,
            gender: puppy.gender,
          });
        }
      }
    } catch (err) {
      return null;
    }
  },
};
