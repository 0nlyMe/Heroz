const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   media: { type: String, required: true },
// });

// const Post = mongoose.model("Post", postSchema);

// module.exports = Post;

// const mongoose = require("mongoose");

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
