const express = require("express");
const router = express.Router();
const { changeMypageInfo, getPinpointInfo } = require("../controllers/Mypage");
const verifyAceess = require("../middleware/verifyAccessToken");

router.get("/pinpointer", verifyAceess, getPinpointInfo);

router.patch("/", verifyAceess, changeMypageInfo);

module.exports = router;
