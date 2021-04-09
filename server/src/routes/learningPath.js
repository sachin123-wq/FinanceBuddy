var express = require('express');
var router = express.Router();
const {
  getAllLearningPath,
  getLearningPath,
  createLearningPath,
  addCourseToPath
} = require('../controllers/learningPath');

router.get('/', getAllLearningPath);
router.get('/:pathId', getLearningPath);
router.post('/', createLearningPath);
router.post('/:pathId/addCourseToPath', addCourseToPath);

module.exports = router;
