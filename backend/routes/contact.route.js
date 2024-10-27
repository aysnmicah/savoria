const express = require('express');
const contactRoute = express.Router();
let contactModel = require('../models/contact'); 

// Create a new contact form submission
contactRoute.route('/submit-contact').post(async (req, res, next) => {
  try {
    const contactData = await contactModel.create(req.body); 
    res.json({ msg: 'Contact form submitted successfully', data: contactData });
  } catch (error) {
    return next(error);  
  }
});

contactRoute.route('/').get(async (req, res, next) => {
  try {
    const contacts = await contactModel.find();
    res.json(contacts);
  } catch (error) {
    return next(error);
  }
});

module.exports = contactRoute;
