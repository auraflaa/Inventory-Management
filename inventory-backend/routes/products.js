const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

// GET all products
router.get('/', productsController.getAllProducts);

// POST a new product
router.post('/', productsController.createProduct);

module.exports = router;
