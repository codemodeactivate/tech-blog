const { User, Post, Comment } = require('../models');
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
            const postData = await Post.findByPk(req.params.id, {
                include: [
                    {
                        model: User,
                        as: 'user',
                        attributes: ['username']
                    },
                    {
                        model: Comment,
                        as: 'comments',
                        include: {
                            model: User,
                            as: 'user',
                            attributes: ['username']
                        }
                    }
                ]
            });

            if (!postData) {
                res.status(404).json({ message: 'No post found with this id!' });
                return;
            }

            const post = postData.get({ plain: true });
            console.log("HERE WE GO" + post);

            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn === true,
                username: req.session.username
            });
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
            //res.json(updatedPost);
            res.redirect("/dashboard");
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

    renderEditPost: async (req, res, next) => {
        try {
            const postData = await Post.findByPk(req.params.id);

            if (!postData) {
                res.status(404).json({
                    message: 'No post found with this id!'
                });
                return;
            }

            const post = postData.get({ plain: true });

            res.render('partials/edit-post-component', {
                post,
                loggedIn: req.session.loggedIn === true,
                username: req.session.username
            });
        } catch (err) {
            next(err);
        }
    }
};
