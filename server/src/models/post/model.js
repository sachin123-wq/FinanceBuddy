const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const DomainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});
const Domain = mongoose.model('Domain', DomainSchema);

const commentSchema = new mongoose.Schema({
  parent_id: {
    type: String,
    default: null
  },
  post_id: {
    type: ObjectId,
    ref: 'Post'
  },
  text: {
    type: String,
    required: true
  },
  user: {
    type: ObjectId,
    ref: 'User'
  }
});

// const Comment = mongoose.model('Comment', ProductCartSchema);

const postSchema = new Schema(
  {
    // _id: { type: String },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      default: 0
    },
    domain: { type: ObjectId, ref: 'Domain' },
    comments: {
      type: [commentSchema],
      default: []
    },
    words_count: {
      type: Number,
      required: true
    },
    user: {
      type: ObjectId,
      ref: 'User'
    },
    quiz: {
      type: ObjectId,
      ref: 'Quiz'
    },
    image: String
  },
  { timestamps: true }
);
const Post = mongoose.model('Post', postSchema);

module.exports = { Post, Domain };
