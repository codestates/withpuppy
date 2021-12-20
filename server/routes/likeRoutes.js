const express = require('express');
const router = express.Router();
const { index, like, cancel } = require('../controllers/Like');

router.get('/', index).post('/', like).post('/cancel', cancel);

module.exports = router;
