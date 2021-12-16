const express = require('express');
const router = express.Router();
const {
  changeMypageInfo,
  getPinpointInfo,
  updateMypinMessages,
} = require('../controllers/Mypage');
const verifyAceess = require('../middleware/verifyAccessToken');

router.get('/pinpointer', verifyAceess, getPinpointInfo);
router.post('/pinppinter/message', verifyAceess, updateMypinMessages);

router.patch('/', verifyAceess, changeMypageInfo);

module.exports = router;
