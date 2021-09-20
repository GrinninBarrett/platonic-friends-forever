const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tagRoutes = require('./tagRoutes');
const userTagRoutes = require('./userTagRoutes');

router.use('/users', userRoutes);
router.use('/tags', tagRoutes);
router.use('/usertags', userTagRoutes);

module.exports = router;
