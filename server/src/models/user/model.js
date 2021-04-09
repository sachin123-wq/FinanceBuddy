const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

const userSchema = new Schema(
  {
    // _id: { type: String },
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
    lastname: {
      type: String,
      maxlength: 32,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    userinfo: {
      type: String,
      trim: true
    },
    encry_password: {
      type: String,
      required: true
    },
    salt: String,
    role: {
      type: Number, // Higher the number more previleges 0- Normal, 1 - Educator
      default: 0
    },
    finance_rating: {
      type: Array,
      default: [0]
    },
    question_attempted: {
      type: Number,
      default: 0
    },
    question_correct: {
      type: Number,
      default: 0
    },
    quiz_attempted: {
      type: Number,
      default: 0
    },
    bookmarks: [{ type: ObjectId, unique: true, ref: 'Post' }]
  },
  { timestamps: true }
);

userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password; // Private Variable '_' - convention;
    this.salt = uuidv4();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  // We can't use arrow function

  authenticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function (plainpassword) {
    if (!plainpassword) return '';
    try {
      return crypto
        .createHmac('sha256', this.salt)
        .update(plainpassword)
        .digest('hex');
    } catch (err) {
      return '';
    }
  }
};

module.exports = mongoose.model('User', userSchema);
