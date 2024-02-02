const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  content: {
    type: String,
    trim: true,
  },
  image: String,
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
