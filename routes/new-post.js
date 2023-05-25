const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { Post } = require('../models');
const postController = require('../controllers/postController');
const withAuth = require('../utils/auth');

router.use(bodyParser.urlencoded({ extended: false }));

router.post('/', withAuth, postController.createPost);

module.exports = router;
