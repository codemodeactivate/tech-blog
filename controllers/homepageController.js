const { Post } = require('../models');

exports.renderHomepage = async (req, res, next) => {
    try {
        const posts = await Post.findAll();
        res.render('homepage', { posts });
    } catch (err) {
        next(err);
    }
};
