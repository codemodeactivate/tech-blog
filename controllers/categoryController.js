const { Category } = require('../models');

exports.getAllCategories = async (req, res, next) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (err) {
        next(err);
    }
}

exports.getCategoryById = async (req, res, next) => {
    try {
        const category = await Category.findByPk(req.params.id);
        res.json(category);
    } catch (err) {
        next(err);
    }
}

exports.createCategory = async (req, res, next) => {
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    } catch (err) {
        next(err);
    }
}

exports.updateCategory = async (req, res, next) => {
    try {
        const updatedCategory = await Category.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json(updatedCategory);
    } catch (err) {
        next(err);
    }
}

exports.deleteCategory = async (req, res, next) => {
    try {
        await Category.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({ message: 'Category deleted successfully.' });
    } catch (err) {
        next(err);
    }
}
