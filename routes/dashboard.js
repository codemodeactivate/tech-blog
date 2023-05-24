// routes/dashboard.js
const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');

// Render the dashboard page
router.get('/', withAuth, (req, res) => {
    // Only logged-in users can access this route
    res.render('dashboard');

    
});

module.exports = router;
