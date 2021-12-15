const express = require("express");
const router = express.Router();
const {
  enrollPin,
  getPinInfo,
  getAllPins,
} = require("../controllers/Pin/index");

//라우팅 주소 수정해야함.
router.post("/enroll", enrollPin);
router.get("/pininfo", getPinInfo);
router.get("/allpins", getAllPins);

module.exports = router;
