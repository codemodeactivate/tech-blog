const { Post } = require("../models");
const slugify = require("slugify");

module.exports = {
    //render create post page/form
    renderCreatePostForm: async (req, res, next) => {
        try {
            res.render("new-post", {
                isLoggedIn: req.session.logged_in,
            });
        } catch (err) {
            next(err);
        }
    },

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
            // Retrieve the post data from the request body
            const { title, post_content } = req.body;

            // Create the post using the post model
            const newPost = await Post.create({
                title,
                post_content,
            });

            // Redirect to the dashboard after creating the post
            res.redirect("/dashboard");
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
            res.json({ message: "Post deleted successfully." });
        } catch (err) {
            next(err);
        }
    },
    renderPost: async (req, res, next) => {
        try {
            const post = await Post.findByPk(req.params.id);
            res.render('single-post', { post });
        } catch (err) {
            next(err);
        }
    },
};
