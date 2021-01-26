const router = require('express').Router();
const categoryRoutes = require('./category');
const postRoutes = require('./post');

// ! if url begins with '/api/categories'...
router.use('/categories', categoryRoutes);

// ! if url begins with '/api/posts'...
router.use('/posts', postRoutes);

module.exports = router;
