const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, 'A course must have an author.']
  },
  title: {
    type: String,
    required: [true, 'A course must have a name.'],
    unique: true
  },
  description: {
    type: String,
    required: [true, 'A course must have a description.']
  },
  rating: {
    type: Number,
    default: 4.5
  },
  images: [String],
  price: {
    type: Number,
    required: [true, 'A course must have a price.']
  }
});
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
