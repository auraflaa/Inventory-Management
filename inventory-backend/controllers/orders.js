const db = require('../config/db');

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const [orders] = await db.query('SELECT * FROM Orders');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve orders' });
  }
};

// Create a new order
exports.createOrder = async (req, res) => {
  const { EmployeeID, CustomerID, ShippedDate, OrderStatusID, PaymentMethod } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO Orders (EmployeeID, CustomerID, ShippedDate, OrderStatusID, PaymentMethod) VALUES (?, ?, ?, ?, ?)',
      [EmployeeID, CustomerID, ShippedDate, OrderStatusID, PaymentMethod]
    );
    res.status(201).json({ message: 'Order created', OrderID: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};
