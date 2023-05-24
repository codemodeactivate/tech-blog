const { Tag } = require('../models');

exports.getAllTags = async (req, res, next) => {
    try {
        const tags = await Tag.findAll();
        res.json(tags);
    } catch (err) {
        next(err);
    }
};
