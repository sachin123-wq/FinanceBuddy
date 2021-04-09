const User = require('./model');

exports.createUser = (user, callback) => {
  let _session = new User(user);
  _session.save(callback);
};

exports.getUserByQuery = async (query) => {
  let queryResponse = await User.find(query);
  return queryResponse;
};

exports.getOneUserByQuery = async (query) => {
  let queryResponse = await User.findOne(query);
  return queryResponse;
};

exports.deleteUser = async (query, callback) => {
  User.deleteMany(query, callback);
};

exports.updateUser = async (query, user, callback) => {
  User.updateOne(query, user, callback);
};

// exports.getUserById = async (id) => {
//   let response = await User.findById();
// };
