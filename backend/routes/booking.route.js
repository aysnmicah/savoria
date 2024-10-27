const express = require('express');
const bookingRoute = express.Router();
const BookingModel = require('../models/booking'); 

// Log the BookingModel to check its structure
console.log('BookingModel:', BookingModel); 

// Create a new booking submission
bookingRoute.route('/submit-booking').post(async (req, res, next) => {
  try {
    const bookingData = await BookingModel.create(req.body);
    res.json({ msg: 'Booking created successfully', data: bookingData });
  } catch (error) {
    console.error('Error creating booking:', error); 
    return next(error);
  }
});

// Get all bookings
bookingRoute.route('/').get(async (req, res, next) => {
  try {
    const bookings = await BookingModel.find();
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error); 
    return next(error);
  }
});

module.exports = bookingRoute;
