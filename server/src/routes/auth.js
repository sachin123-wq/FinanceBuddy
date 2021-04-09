var express = require('express');
var router = express.Router();
const { signout, signin, signup, isSignedIn } = require('../controllers/auth');

router.get('/signout', signout);
router.post('/signin', signin);
router.post('/signup', signup);
router.get('/test', isSignedIn, (req, res) => {
  return res.json({
    msg: 'Protected Route',
    auth: req.auth
  });
});

module.exports = router;
