const db = require('../config/db');

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const [employees] = await db.query('SELECT * FROM Employees');
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve employees' });
  }
};

// Add new employee
exports.addEmployee = async (req, res) => {
  const { FirstName, LastName, EmailAddress, JobTitle, PrimaryPhone } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO Employees (FirstName, LastName, EmailAddress, JobTitle, PrimaryPhone) VALUES (?, ?, ?, ?, ?)',
      [FirstName, LastName, EmailAddress, JobTitle, PrimaryPhone]
    );
    res.status(201).json({ message: 'Employee added', EmployeeID: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add employee' });
  }
};
