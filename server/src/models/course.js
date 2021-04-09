const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;
const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: String,
    videoUrl: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    videoslist: [videoSchema],
    author: {
      type: ObjectId,
      ref: 'User'
    },
    difficulty: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
      default: 0
    },
    domains: {
      type: Schema.Types.ObjectId,
      ref: 'Domain'
    },
    thumbnail: String
  },
  { timestamps: true }
);

const Course = new mongoose.model('Course', courseSchema);
module.exports = Course;
