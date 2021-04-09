const User = require('../models/user/model');
const { getUserByQuery } = require('../models/user/service');

exports.getUserById = (req, res, next, id) => {
  User.findById(id)
    .populate('bookmarks')
    .exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: 'No User was found in DB'
        });
      }
      req.profile = user;
      next();
    });
};

exports.getUser = (req, res) => {
  console.log(req.profile);
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.createdAt = undefined;
  req.profile.updatedAt = undefined;
  return res.json(req.profile);
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await getUserByQuery({});
    if (!users) {
      return res.status(400).json({
        error: 'No users found'
      });
    }
    return res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: 'No users found'
    });
  }
};

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: 'You are not authorized to update this user'
        });
      }
      user.salt = undefined;
      user.encry_password = undefined;
      res.send(user);
    }
  );
};

exports.createBookmark = async (req, res) => {
  const { userId, postId } = req.params;
  User.updateOne(
    { _id: userId },
    { $addToSet: { bookmarks: postId } },
    (err, user) => {
      console.log(err);
      if (err) {
        return res.status(400).json({
          error: 'Not able to update the user'
        });
      }
      res.send(user);
    }
  );
};
