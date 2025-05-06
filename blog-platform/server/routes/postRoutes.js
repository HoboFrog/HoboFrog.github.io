const express = require('express');
const { createPost, getAllPosts, getPostByDate } = require('../controllers/postController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/post', auth, createPost);
router.get('/posts', getAllPosts);
router.get('/post/:date', getPostByDate);

module.exports = router;
