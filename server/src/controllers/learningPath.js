const { identity } = require('lodash');
const LearningPath = require('../models/learningPath');

exports.getAllLearningPath = async (req, res) => {
  const learningPaths = await LearningPath.find({});
  if (!learningPaths) {
    return res.status(400).json({
      error: 'No learning Path found!!!'
    });
  }
  res.send(learningPaths);
};

exports.getLearningPath = async (req, res) => {
  const { pathId } = req.params;

  const learningPath = await LearningPath.findOne({ _id: pathId });
  if (!learningPath) {
    return res.status(400).json({
      error: 'No Learning Path found!!!'
    });
  }
  res.send(learningPath);
};

exports.createLearningPath = async (req, res) => {
  const { title, description, domain, levels, courses } = req.body;
  const data = {
    title,
    description,
    domain,
    levels
  };

  const learningPath = new LearningPath(data);
  for (let course of courses) {
    learningPath.courses.push(course.courseId);
  }
  // console.log(learningPath);
  learningPath.save((err, path) => {
    // console.log(err);
    if (err) {
      return res.status(400).json({
        error: 'Error while saving in DB'
      });
    }
    res.json(path);
  });
};

exports.addCourseToPath = async (req, res) => {
  const { courseId, pathId } = req.body;

  LearningPath.findByIdAndUpdate(
    { _id: pathId },
    {
      $addToSet: {
        courses: courseId
      }
    },
    (err, path) => {
      console.log(err);
      if (err) {
        return res.status(400).json({
          error: 'Not able to update the path'
        });
      }
      res.send(path);
    }
  );
};
