// routes/dashboard.js
const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');
const { Post } = require('../models');
router.get('/', withAuth, async (req, res, next) => {
    try {
      const posts = await Post.findAll(); // Retrieve all posts
      res.render('dashboard', { posts }); // Pass the posts data to the dashboard view
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
