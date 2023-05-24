const { Post } = require('../models');

module.exports = {

    getAllPosts: async (req, res, next) => {
        try {
            const posts = await Post.findAll();
            res.json(posts);
        } catch (err) {
            next(err);
        }
    },

    getPostById: async (req, res, next) => {
        try {
            const post = await Post.findByPk(req.params.id);
            res.json(post);
        } catch (err) {
            next(err);
        }
    },

    createPost: async (req, res, next) => {
        try {
            const newPost = await Post.create(req.body);
            res.json(newPost);
        } catch (err) {
            next(err);
        }
    },

    updatePost: async (req, res, next) => {
        try {
            const updatedPost = await Post.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.json(updatedPost);
        } catch (err) {
            next(err);
        }
    },

    deletePost: async (req, res, next) => {
        try {
            await Post.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.json({ message: 'Post deleted successfully.' });
        } catch (err) {
            next(err);
        }
    }


}
