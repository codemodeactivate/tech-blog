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
        const newComment = await Comment.create(req.body);
        res.json(newComment);
    } catch (err) {
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


