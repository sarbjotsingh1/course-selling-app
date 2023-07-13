const express = require('express');
const morgan = require('morgan');
const courseRouter = require('./routes/courseRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// Middle ware.
app.use(express.json());

// Custom middleware.
app.use((req, resp, next) => {
  console.log('Middleware vaala kam ethe 👋 👋');
  next();
});

// Show development logs.
console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Middleware to serve static files.
app.use(express.static(`${__dirname}/public`));

// Regiter Route Middleware.
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
