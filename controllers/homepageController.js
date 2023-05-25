const { Post } = require("../models");

exports.renderHomepage = async (req, res, next) => {
    try {
        const posts = await Post.findAll();
        const plainPosts = posts.map((post) => post.get({ plain: true }));

        // Render the navigation bar to a string
        res.render("partials/nav", { layout: false }, (err, navHtml) => {
            if (err) return next(err);

            // Pass the navigation bar HTML to the main render call
            res.render("dashboard", {
                isLoggedIn: req.session.logged_in = true,
                posts: plainPosts,
                 nav: navHtml
                });
        });
    } catch (err) {
        next(err);
    }
};
