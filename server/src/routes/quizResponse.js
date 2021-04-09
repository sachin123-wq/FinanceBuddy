var express = require('express');
var router = express.Router();
const { verifyToken } = require('../controllers/auth');
const { 
    createQuizResponse, getQuizResponse
} = require('../controllers/quiz');

router.post('/', verifyToken, createQuizResponse);
router.get('/', verifyToken, getQuizResponse);

module.exports = router;