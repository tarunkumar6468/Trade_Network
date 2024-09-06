const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
  item: String,
  quantity: Number,
  price: Number,
  status: String, // 'pending', 'completed', 'shipped'
  stationFrom: String,
  stationTo: String,
});

module.exports = mongoose.model('Trade', TradeSchema);
