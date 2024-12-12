const express = require('express');
const { getServices } = require('../controllers/servicesController');

const router = express.Router();

router.get('/services', getServices);

module.exports = router;
