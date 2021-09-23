const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tagRoutes = require('./tagRoutes');
const userTagRoutes = require('./userTagRoutes');
const userLikeRoutes = require('./userLikeRoutes');

router.use('/users', userRoutes);
router.use('/tags', tagRoutes);
router.use('/usertags', userTagRoutes);
router.use('/userlikes', userLikeRoutes);

module.exports = router;
