const { User } = require('../../models');

function setUser(req, res, next) {
  if (req.session && req.session.user_id) {
    User.findByPk(req.session.user_id)
      .then(user => {
        req.user = user;
        next();
      });
  } else {
    next();
  }
}

module.exports = setUser;
