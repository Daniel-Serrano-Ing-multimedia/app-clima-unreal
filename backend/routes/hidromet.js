const express = require('express');
const api = express.Router();
// controller
const hidromet = require('../controllers/hidrometControllers');

api.get('/pronostico/:ValRegion', hidromet.pronostico);

module.exports = api;