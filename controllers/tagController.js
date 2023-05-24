const { Tag } = require('../models');

exports.getAllTags = async (req, res, next) => {
    try {
        const tags = await Tag.findAll();
        res.json(tags);
    } catch (err) {
        next(err);
    }
};

exports.getTagById = async (req, res, next) => {
    try {
        const tag = await Tag.findByPk(req.params.id);
        res.json(tag);
    } catch (err) {
        next(err);
    }
};

exports.createTag = async (req, res, next) => {
    try {
        const newTag = await Tag.create(req.body);
        res.json(newTag);
    } catch (err) {
        next(err);
    }
}

exports.updateTag = async (req, res, next) => {
    try {
        const updatedTag = await Tag.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json(updatedTag);
    } catch (err) {
        next(err);
    }
}

exports.deleteTag = async (req, res, next) => {
    try {
        await Tag.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({ message: 'Tag deleted successfully.' });
    } catch (err) {
        next(err);
    }
}
