const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controllers = require('../controllers');
//const { signup } = require('../controllers/userController');
const signupHandler = controllers.userController.signup;

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/', signupHandler);

module.exports = router;
