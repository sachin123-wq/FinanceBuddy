const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema;

const learningPathSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    domain: {
      type: ObjectId,
      ref: 'Domain'
    },
    levels: Number,
    courses: [
      {
        type: ObjectId,
        ref: 'Course'
      }
    ]
  },
  { timestamps: true }
);

const LearningPath = new mongoose.model('LearningPath', learningPathSchema);
module.exports = LearningPath;
