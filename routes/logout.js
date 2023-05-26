const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bodyParser = require('body-parser');
const userController = require('../controllers/userController');
const withAuth = require('../utils/auth');

router.get('/', userController.logout);

module.exports = router;
