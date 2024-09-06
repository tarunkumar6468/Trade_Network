const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventoryModels');
const connectDB = require('../DB/database');

// Connect to the database
connectDB();

// Update inventory
router.post('/', async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    await inventory.save();
    res.status(201).json(inventory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get inventory
router.get('/', async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
