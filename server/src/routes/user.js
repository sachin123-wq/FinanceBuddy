const express = require('express');
const router = express.Router();

const {
  getUserById,
  getUser,
  getAllUsers,
  updateUser
} = require('../controllers/user');
const { isSignedIn, isAuthenticated } = require('../controllers/auth');

router.param('userId', getUserById);
router.get('/', getAllUsers);
router.get('/:userId', isSignedIn, isAuthenticated, getUser);
router.put('/:userId', isSignedIn, isAuthenticated, updateUser);

module.exports = router;
