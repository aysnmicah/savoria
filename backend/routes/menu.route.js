// routes/menuRoutes.js
const express = require('express');
const multer = require('multer');
const {
  getAllMenuItems,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
} = require('../controllers/menuController');

const router = express.Router();

// Set up Multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Define routes
router.get('/', getAllMenuItems);
router.post('/', upload.single('image'), addMenuItem);
router.put('/:id', upload.single('image'), updateMenuItem);
router.delete('/:id', deleteMenuItem);

module.exports = router;
