// controllers/menuController.js
const MenuItem = require('../models/MenuItem');

// Get all menu items
exports.getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
};

// Add a new menu item
exports.addMenuItem = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const newItem = new MenuItem({
      name,
      description,
      price,
      category,
      image: req.file ? `/uploads/${req.file.filename}` : '',
    });
    await newItem.save();
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add menu item' });
  }
};

// Update an existing menu item
exports.updateMenuItem = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const update = { name, description, price, category };
    if (req.file) {
      update.image = `/uploads/${req.file.filename}`;
    }
    const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, update, { new: true });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update menu item' });
  }
};

// Delete a menu item
exports.deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Menu item deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete menu item' });
  }
};
