const express = require('express');
const router = express.Router();

const {
  getUserById,
  getUser,
  getAllUsers,
  updateUser,
  createBookmark
} = require('../controllers/user');
const { verifyToken } = require('../controllers/auth');

router.param('userId', getUserById);
router.get('/', getAllUsers);
router.get('/:userId', verifyToken, getUser);
router.put('/:userId', verifyToken, updateUser);
router.post(
  '/:userId/bookmark/:postId',
  verifyToken,
  createBookmark
);

module.exports = router;
