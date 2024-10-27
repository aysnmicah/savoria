const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const createError = require('http-errors');

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/SavoriaDb')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason);
  });

const contactAPI = require('./routes/contact.route'); 
const bookAPI = require('./routes/booking.route'); 

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// API
app.use('/api', contactAPI);  
app.use('/api', bookAPI); 

// Log incoming requests for debugging
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for '${req.url}'`);
  next();
});

// Catch-all route for testing
app.use('*', (req, res) => {
  res.status(404).send('Route not found');
});

// Create port
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port);
});

// Error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
