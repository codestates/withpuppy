const express = require("express");
const router = express.Router();
const { getUserInfo, editUserInfo, deleteUserInfo } = require("../controllers/User");
const verifyAceess = require("../middleware/verifyAccessToken");
const upload = require("../middleware/uploadImg");
const { editUserProfile } = require("../controllers/User");

router
  .route("/userinfo")
  .get(verifyAceess, getUserInfo)
  .put(verifyAceess, editUserInfo)
  .delete(verifyAceess, deleteUserInfo);

router.put("/userprofile", verifyAceess, upload.single("userImg"), editUserProfile);
module.exports = router;
