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
  category: {
    type: String,
    lowercase: true,
    trim: true,
  },
  popularity: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

postSchema.index({ category: 1 });

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
