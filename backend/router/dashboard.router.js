const express = require('express');
const router = express.Router();
const dashboardController = require('../controller/dashboard.controller');

// Example route: GET /dashboard
router.get('/', dashboardController.getDashboard);

module.exports = router;
