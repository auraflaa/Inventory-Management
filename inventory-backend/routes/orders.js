const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders');

router.get('/', ordersController.getAllOrders);
router.post('/', ordersController.createOrder);

module.exports = router;
