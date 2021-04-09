var express = require('express');
var router = express.Router();
const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  createPostComment
} = require('../controllers/post');
const { verifyToken, isSignedIn } = require('../controllers/auth');

// TODO: Use Correct validators here

router.get('/', getAllPosts);
router.get('/:postId', getPost);
router.post('/', verifyToken, createPost);
router.put('/:postId', verifyToken, updatePost);
router.post('/:postId/comment', verifyToken, createPostComment);

module.exports = router;
