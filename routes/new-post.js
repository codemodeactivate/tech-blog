const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { Post } = require('../models');
//const { User } = require('../models');
const postController = require('../controllers/postController');

router.use(bodyParser.urlencoded({ extended: false }));

router.post('/', postController.createPost);

module.exports = router;
