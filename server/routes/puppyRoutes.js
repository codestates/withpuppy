const express = require("express");
const router = express.Router();
const { changePuppyProfile } = require("../controllers/Puppy");
const upload = require("../middleware/uploadImg");

router.post("/puppyProfile", upload.single("puppyImg"), changePuppyProfile);

module.exports = router;
