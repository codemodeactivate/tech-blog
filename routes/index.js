const router = require('express').Router();

router.use('/api/users', require('./api/userRoutes'));
router.use('/api/posts', require('./api/postRoutes'));
router.use('api/comments', require('./api/commentRoutes'));
router.use('api/roles', require('./api/roleRoutes'));
router.use('api/categories', require('./api/categoryRoutes'));
router.use('api/tags', require('./api/tagRoutes'));

module.exports = router;
