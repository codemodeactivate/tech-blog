// controllers/userController.js
const { User } = require('../models');


exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: 'User deleted successfully.' });
  } catch (err) {
    next(err);
  }
};
