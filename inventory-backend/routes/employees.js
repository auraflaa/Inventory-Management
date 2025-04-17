const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees');

router.get('/', employeesController.getAllEmployees);
router.post('/', employeesController.addEmployee);

module.exports = router;
