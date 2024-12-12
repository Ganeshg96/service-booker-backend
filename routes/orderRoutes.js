const express = require('express');
const { saveOrderDetails } = require('../controllers/orderController');

const router = express.Router();

router.post('/order-details', saveOrderDetails);

module.exports = router;
