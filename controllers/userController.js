// controllers/userController.js
const { User } = require('../models');

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      next(err);
    }
  },
  getUserById: async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      next(err);
    }
  },
  updateUser: async (req, res, next) => {
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
  },
  deleteUser: async (req, res, next) => {
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
  },
  signup: async (req, res)=> {
        try {
            const newUser = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            });
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            const { password, ...userData } = newUser.dataValues;
            res.redirect('/dashboard');
        } catch (err) {
            res.status(400).json(err);
        }
    },

    login: async (req, res) => {
        try {
            const user = await User.findOne({ where: { username: req.body.username } });
            if (!user) {
                res.status(401).json({ message: 'Login failed. User not found!' });
                return;
            }
            if (!user.checkPassword(req.body.password)) {
                res.status(401).json({ message: 'Login failed. Incorrect password!' });
                return;
            }
            req.session.user_id = user.id;
            req.session.logged_in = true;
            res.redirect('/dashboard');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    logout: async (req, res) => {
      if (req.session) {
          // Delete session object
          req.session.destroy(function(err) {
              if(err) {
                  return res.status(500).json(err);
              } else {
                  return res.redirect('/');
              }
          });
      }
  }
  };
