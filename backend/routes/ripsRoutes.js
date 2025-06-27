const express = require('express');
const router = express.Router();
const ripsController = require('../controllers/ripsController');

// Endpoint para generar RIPS JSON
router.get('/rips-json/:numFactura', ripsController.getRipsJson);

module.exports = router;