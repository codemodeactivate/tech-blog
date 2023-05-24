const express = require('express');
const router = express.Router();
const { User } = require('../models');


//Route for login

router.get('/', (req, res) => {
    res.render('login');
    }
);
