// models/MenuItem.js
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String, // Stores image path
});

module.exports = mongoose.model('MenuItem', menuSchema);
