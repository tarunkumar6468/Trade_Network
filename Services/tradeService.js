const express = require('express');
const router = express.Router();
const Trade = require('../models/tradeModel');
const connectDB = require('../DB/database');

// Connect to the database
connectDB();

// Create a trade
router.post('/', async (req, res) => {
  try {
    const trade = new Trade(req.body);
    await trade.save();
    res.status(201).json(trade);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all trades
router.get('/', async (req, res) => {
  try {
    const trades = await Trade.find();
    res.json(trades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
