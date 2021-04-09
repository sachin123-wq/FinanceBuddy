var express = require('express');
var router = express.Router();
const { verifyToken, isEducator } = require('../controllers/auth');
const {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  addVideoToCourse
} = require('../controllers/course');

router.get('/', getAllCourses);
router.get('/:courseId', getCourse);
router.post('/', verifyToken, isEducator, createCourse);
router.put('/:courseId', verifyToken, isEducator, updateCourse);
router.post('/:courseId/addVideo', verifyToken, isEducator, addVideoToCourse);

module.exports = router;
