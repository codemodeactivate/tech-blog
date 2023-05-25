const { Post } = require("../models");

exports.renderHomepage = async (req, res, next) => {
    try {
        const posts = await Post.findAll();
        const plainPosts = posts.map((post) => post.get({ plain: true }));

        // Render the dashboard page
        res.render("homepage", {
            isLoggedIn: req.session.logged_in,
            posts: plainPosts
        });
    } catch (err) {
        next(err);
    }
};
