const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { title, date, content } = req.body;
  const post = new Post({ title, date, content });
  await post.save();
  res.status(201).send('Post created');
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().sort({ date: -1 });
  res.json(posts);
};

exports.getPostByDate = async (req, res) => {
  const post = await Post.findOne({ date: new Date(req.params.date) });
  if (!post) return res.status(404).send('Post not found');
  res.json(post);
};
