const express = require("express");
const router = express.Router();
const { changePuppyProfile } = require("../controllers/Puppy");
const verifyAceess = require("../middleware/verifyAccessToken");
const upload = require("../middleware/uploadImg");

router.put("/puppyProfile", verifyAceess, upload.single("puppyImg"), changePuppyProfile);

module.exports = router;
