const express = require('express');
const router = express.Router();

//route imports
const userRoutes = require('./api/userRoutes');
const tagRoutes = require('./api/tagRoutes');

router.use('/users', userRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
// module.exports = {
//     userRoutes: require('./userRoutes'),
//     // Import your other route files here
//     tagRoutes: require('./tagRoutes'),
//   };
