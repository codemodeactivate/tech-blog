const { Comment } = require('../models');

exports.getAllComments = async (req, res, next) => {
    try {
        const comments = await Comment.findAll();
        res.json(comments);
    } catch (err) {
        next(err);
    }
}

exports.getCommentById = async (req, res, next) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        res.json(comment);
    } catch (err) {
        next(err);
    }
}

exports.createComment = async (req, res, next) => {
    try {
        const { post_id, comment_text } = req.body;
        if (!req.session.user) {
            return res.status(401).json({ message: "No user is logged in" });
        }
        const user_id = req.session.user.id;
        console.log("BODY" + { post_id, user_id, comment_text });
        const newComment = await Comment.create({ post_id, user_id, comment_text });

        res.json(newComment);
    } catch (err) {
        console.log(err.errors);
        next(err);
    }
}



exports.updateComment = async (req, res, next) => {
    try {
        const updatedComment = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json(updatedComment);
    } catch (err) {
        next(err);
    }
}

exports.deleteComment = async (req, res, next) => {
    try {
        await Comment.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({ message: 'Comment deleted successfully.' });
    } catch (err) {
        next(err);
    }
}
