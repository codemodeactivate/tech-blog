// routes/dashboard.js
const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');
const { Post } = require('../models');
const dashboardController = require('../controllers/dashboardController');


router.get('/', withAuth, dashboardController.renderDashboard);


//   try {
    //     const posts = await Post.findAll(); // Retrieve all posts
    //     const plainPosts = posts.map((post) => post.get({ plain: true }));
    //     res.render('dashboard', { posts: plainPosts }); // Pass the posts data to the dashboard view
    //   } catch (err) {
    //     next(err);
    //   }
    // });

module.exports = router;
