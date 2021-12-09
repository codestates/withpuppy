const express = require("express");
const router = express.Router();
const { signIn } = require("../controllers/Auth/google");

router.post("/signIn", signIn);

module.exports = router;
