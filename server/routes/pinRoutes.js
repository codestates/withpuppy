const express = require("express");
const router = express.Router();
const { enrollPin, getPinInfo } = require("../controllers/Pin/index");

//라우팅 주소 수정해야함.
router.post("/pin-info", enrollPin);
router.get("/pin", getPinInfo);

module.exports = router;
