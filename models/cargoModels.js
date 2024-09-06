const mongoose = require('mongoose');

const CargoSchema = new mongoose.Schema({
  tradeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trade' },
  currentLocation: String,
  status: String, // 'in transit', 'delivered'
});

module.exports = mongoose.model('cargo', CargoSchema);
