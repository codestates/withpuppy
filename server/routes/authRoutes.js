const express = require('express');
const router = express.Router();
const {
  signIn,
  signOut,
  signup,
  getAccessToken,
} = require('../controllers/Auth');

router.post('/signin', signIn);

router.get('/signout', signOut);

router.post('/signup', signup);

router.get('/accesstoken', getAccessToken);

module.exports = router;
