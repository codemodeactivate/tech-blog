const { Post } = require("../models");

exports.renderHomepage = async (req, res, next) => {
    try {
        const template = req.session.logged_in ? "homepage-admin" : "homepage";
         // Choose the layout based on login status
         const layout = req.session.logged_in ? "dashboard" : "main";
        const posts = await Post.findAll();
        const plainPosts = posts.map((post) => post.get({ plain: true }));

        // Render the dashboard page
        res.render(template, {
            layout: layout,
            isLoggedIn: req.session.logged_in,
            posts: plainPosts
        });
    } catch (err) {
        next(err);
    }
};
