const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Render the sign up page
router.get('/', (req, res) => {
    res.render('signup');
});

// Handle sign up form submission
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        req.session.user_id = newUser.id;
        req.session.logged_in = true;
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
