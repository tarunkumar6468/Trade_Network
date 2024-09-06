const express = require('express');
const app = express();
const tradeService = require('./Services/tradeService');
const inventoryService = require('./Services/inventoryService'); 
const cargoModels = require('./Services/cargoService');

app.use(express.json());

// Route to Trade Service
app.use('/trades', tradeService);

// Route to Inventory Service
app.use('/inventory', inventoryService);

app.use('/cargo',cargoModels);

app.listen(3000, () => {
    console.log('Gateway server running on port 3000');
});