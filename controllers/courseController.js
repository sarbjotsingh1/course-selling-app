const Course = require('../models/courseModel');

// Course routes.

module.exports.deleteCourseById = async (req, resp) => {
  try {
    const result = await Course.findByIdAndRemove(req.params.id);

    resp.status(200).json({
      status: 'SUCCESS',
      data: {},
      message: `The course ${result.title} has been deleted successfully.`
    });
  } catch (err) {
    console.log(
      `Failed to delete course '${req.params.id}' from DB, error: ${err}`
    );

    resp.status(500).json({
      status: 'FAILED',
      message: err
    });
  }
};

module.exports.listCourses = async (req, resp) => {
  try {
    const courses = await Course.find();

    resp.status(200).json({
      status: 'SUCCESS',
      results: courses.length,
      data: courses
    });
  } catch (err) {
    console.log('Failed to fetch courses from DB.');

    resp.status(500).json({
      status: 'FAILED',
      message: err
    });
  }
};

module.exports.getCourse = async (req, resp) => {
  try {
    const course = await Course.findById(req.params.id);

    resp.status(200).json({
      status: 'SUCCESS',
      data: course
    });
  } catch (err) {
    // TODO: Raise 5xx in case of server errors.
    console.log(
      `Failed to get the course with id ${req.params.id} from DB, error: ${err}`
    );
    resp.status(404).json({
      status: 'SUCCESS',
      message: 'COURSE_NOT_FOUND',
      detail: err
    });
  }
};

module.exports.createCourse = async (req, resp) => {
  try {
    const createdTour = await Course.create(req.body);

    resp.status(201).json({
      status: 'SUCCESS',
      data: createdTour
    });
  } catch (err) {
    console.log('Failed to save a new course in DB, ', err);

    resp.status(400).json({
      status: 'FAILED',
      message: err
    });
  }
};

module.exports.updateCourseById = async (req, resp) => {
  try {
    const createdCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    resp.status(200).json({
      status: 'SUCCESS',
      data: createdCourse
    });
  } catch (err) {
    console.log(`Failed to update the course ${req.params.id}, error: ${err}`);

    resp.status(400).json({
      status: 'FAILED',
      message: '',
      detail: err
    });
  }
};
