const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  people: { type: Number, required: true },
  message: { type: String }
});

const BookingModel = mongoose.model('Booking', BookingSchema);

module.exports = BookingModel;
