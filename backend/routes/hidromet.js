const express = require('express');
const api = express.Router();
// controller
const hidromet = require('../controllers/hidrometControllers');

api.get('/pronostico/:valRegion', hidromet.pronostico);

module.exports = api;