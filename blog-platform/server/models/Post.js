const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  date: Date,
  content: String
});

module.exports = mongoose.model('Post', PostSchema);
