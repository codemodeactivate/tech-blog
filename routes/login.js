const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const loginHandler = controllers.userController.login;

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', loginHandler);

module.exports = router;
