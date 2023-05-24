const { Post } = require('../models');

exports.renderHomepage = async (req, res, next) => {
    try {
        const posts = await Post.findAll();
        console.log(posts);
        const plainPosts = posts.map(post => post.get({ plain: true }));
        res.render('homepage', { posts: plainPosts });
    } catch (err) {
        next(err);
    }
};
