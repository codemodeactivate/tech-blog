const express = require('express');
const router = express.Router();

//route imports
const userRoutes = require('./api/userRoutes');
const tagRoutes = require('./api/tagRoutes');
const roleRoutes = require('./api/roleRoutes');
const postRoutes = require('./api/postRoutes');
const categoryRoutes = require('./api/categoryRoutes');
const commentRoutes = require('./api/commentRoutes');
const homepageController = require('../controllers/homepageController');
const signupRoutes = require('./signup');
const dashboardRoutes = require('./dashboard');
const loginRoutes = require('./login');
const newPostRoutes = require('./new-post');


//router.get('/partials/nav', homepageController.renderNav);
router.use('/users', userRoutes);
router.use('/tags', tagRoutes);
router.use('/roles', roleRoutes);
router.use('/posts', postRoutes);
router.use('/categories', categoryRoutes);
router.use('/comments', commentRoutes);
router.use('/signup', signupRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoutes);
router.use('/new-post', newPostRoutes);

router.get('/', homepageController.renderHomepage);

module.exports = router;
// module.exports = {
//     userRoutes: require('./userRoutes'),
//     // Import your other route files here
//     tagRoutes: require('./tagRoutes'),
//   };
