const { verifyAccess } = require("../utils/token");
const { User, Pinpointer, Puppy } = require("../../models");

module.exports = {
  //핀포인트에 정보 등록 (산책 등록) 여기서는 오직 크리에이트만!!
  enrollPin: async (req, res) => {
    try {
      const longLocation = req.body.location;
      const shortLocation = longLocation.split(" ").slice(0, 3).join(" ");
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
        .json({ message: "enroll walking info success!", data: newPin });
    } catch (err) {
      console.log("wrong!");
    }
  },

  //핀포인터 다 불러오기 (오버레이)
  getAllPins: async (req, res) => {
    try {
      const pinpointers = await Pinpointer.findAll();
      return res.status(200).json({ message: "done!", pinpointers });
      //바디
      /*=> 바디  레벨, x와 y가 나온다
=> 1. 지도의 확대 레벨을 확인하고
=> 확대 레벨에 따라서
ex) 확대 레벨이 3이다
=> 현재 검색한 x, y 기준으로

=> where: x + 0.01 , y + 0.01  >= 데이터베이스 좌표 >= x - 0.01, y - 0.01 
 findAll
*/
    } catch (err) {
      console.log(err);
    }
  },

  //핀포인트 정보 가져오기 (오버레이)
  getPinInfo: async (req, res) => {
    console.log(req.body);
    try {
    } catch (err) {
      console.log("getPinInfo failed");
    }
  },
};
