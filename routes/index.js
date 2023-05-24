const express = require('express');
const router = express.Router();

//route imports
const userRoutes = require('./api/userRoutes');
const tagRoutes = require('./api/tagRoutes');
const roleRoutes = require('./api/roleRoutes');
const postRoutes = require('./api/postRoutes');
const categoryRoutes = require('./api/categoryRoutes');
const commentRoutes = require('./api/commentRoutes');

router.use('/users', userRoutes);
router.use('/tags', tagRoutes);
router.use('/roles', roleRoutes);
router.use('/posts', postRoutes);
router.use('/categories', categoryRoutes);
router.use('/comments', commentRoutes);


module.exports = router;
// module.exports = {
//     userRoutes: require('./userRoutes'),
//     // Import your other route files here
//     tagRoutes: require('./tagRoutes'),
//   };
