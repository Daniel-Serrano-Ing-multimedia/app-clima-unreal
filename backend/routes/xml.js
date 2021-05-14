const express = require('express');
const api = express.Router();
// controller
const xml = require('../controllers/xmlController');

api.get( '/bbc', xml.bbcNews );
api.get( '/bbc-online', xml.bbcNewsOnline );
api.get( '/hibrido', xml.hibrido );


module.exports = api;