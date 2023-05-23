const { Tag } = require('../models');

exports.getAllTags = async (req, res) => {
    try {
        const tags = await Tag.findAll();
        res.json(tags);
    } catch (err) {
        res.status(500).json(err);
    }
};
