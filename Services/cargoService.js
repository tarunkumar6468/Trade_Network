const express = require('express');
const router = express.Router();
const Cargo = require('../models/cargoModels');
const connectDB = require('../DB/database');

// Connect to the database
connectDB();

// Create a cargo entry
router.post('/', async (req, res) => {
  try {
    const cargo = new Cargo(req.body);
    await cargo.save();
    res.status(201).json(cargo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all cargo
router.get('/', async (req, res) => {
  try {
    const cargo = await Cargo.find().populate('tradeId');
    res.json(cargo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
