const express = require("express");
const router = express.Router();
const { signIn, signOut, signup, getAccessToken } = require("../controllers/Auth");

router.post("/signIn", signIn);

router.get("/signOut", signOut);

router.post("/signUp", signup);

router.get("/accessToken", getAccessToken);

module.exports = router;
