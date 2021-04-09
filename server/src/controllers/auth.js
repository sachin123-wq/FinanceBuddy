const { createUser, getOneUserByQuery } = require('../models/user/service');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

exports.signout = (req, res) => {
  res.clearCookie('token');
  res.json({
    message: 'User Signout Successfully'
  });
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  const query = { email };
  try {
    const user = await getOneUserByQuery(query);

    if (!user) {
      return res.status(400).json({
        error: 'USER email does not exist'
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: 'Email and Password doesnot match'
      });
    }
    // create token
    const secret = process.env.SECRET || 'financeBuddy';
    const token = jwt.sign({ _id: user._id }, secret);

    // put token in cookie
    res.cookie('token', token, { expire: new Date() + 9999 });

    // send response to front end
    const { _id, name, email, role } = user;
    return res.json({
      token,
      user: { _id, name, email, role }
    });
  } catch (err) {
    return res.status(400).json({
      error: 'USER email does not exist'
    });
  }
};

exports.signup = (req, res) => {
  console.log('REQ BODY', req.body);
  const user = req.body;
  createUser(user, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        err: 'Not able to save user in DB'
      });
    }
    return res.json({
      name: user.name,
      email: user.email,
      id: user._id
    });
  });
};

// Proctected Routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET || 'financeBuddy',
  algorithms: ['HS256'],
  userProperty: 'auth'
});

// custom middlewares
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: 'ACCESS DENIED'
    });
  }
  next();
};

exports.isEducator = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: 'You are not Educator'
    });
  }
  next();
};


// temporary middleware function 
exports.verifyToken = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) res.status(401).send('Access Denied, Not auth-token provided')

  try {
    const authenticated_user = jwt.verify(token, process.env.SECRET)
    req.user = authenticated_user;
    // go to whatever the main task/function was 
    next();
  }
  catch (err) {
    res.status(400).send('Invalid Token');
  }
}