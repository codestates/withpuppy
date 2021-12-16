const express = require('express');
const router = express.Router();
const { enrollPin, getAllPins } = require('../controllers/Pin/index');

//라우팅 주소 수정해야함.
router.post('/enroll', enrollPin);
router.post('/allpins', getAllPins);

module.exports = router;
