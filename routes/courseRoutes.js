const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router
  .route('/')
  .get(courseController.listCourses)
  .post(courseController.createCourse);

router
  .route('/:id')
  .get(courseController.getCourse)
  .put(courseController.updateCourseById)
  .patch(courseController.updateCourseById)
  .delete(courseController.deleteCourseById);

module.exports = router;
