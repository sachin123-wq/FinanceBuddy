var express = require('express');
var router = express.Router();
const { verifyToken } = require('../controllers/auth');
const { 
    getQuiz, getQuizes, createQuiz
} = require('../controllers/quiz');

// TODO: Use Correct validators here 

router.get('/', verifyToken, getQuizes);
router.get('/:quizId', verifyToken, getQuiz);
router.post('/', verifyToken, createQuiz);

module.exports = router;