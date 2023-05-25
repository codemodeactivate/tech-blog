const { Post } = require('../models');
const slugify = require('slugify');

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
          const { title, post_content } = req.body;
          if (!req.user) {
            return res.status(401).json({ error: 'User not authenticated.' });
          }

          const slug = slugify(title, {
            replacement: '-',
            lower: true,
            strict: true
          });
          const user_id = req.user ? req.user.id : undefined;
          const newPost = await Post.create({
            title,
            post_content,
            user_id: req.user.id // Assuming you have a logged-in user and req.user contains the user information
          });

          res.redirect('/dashboard');
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
