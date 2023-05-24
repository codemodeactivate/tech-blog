const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { Post } = require('../models');
//const { User } = require('../models');

router.use(bodyParser.urlencoded({ extended: false }));

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
