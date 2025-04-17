const db = require('../config/db');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const [products] = await db.query('SELECT * FROM Products');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
};

// Create a product
exports.createProduct = async (req, res) => {
  const { ProductName, ProductCode, UnitPrice, QuantityPerUnit } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO Products (ProductName, ProductCode, UnitPrice, QuantityPerUnit) VALUES (?, ?, ?, ?)',
      [ProductName, ProductCode, UnitPrice, QuantityPerUnit]
    );
    res.status(201).json({ message: 'Product added', ProductID: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add product' });
  }
};
