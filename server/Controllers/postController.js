const Post = require("../Models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, content, mediaURL } = req.body;

    // new post with the data
    const newPost = new Post({
      title,
      content,
      image: mediaURL,
    });

    const savedPost = await newPost.save();

    res.status(201).json({
      status: "success",
      data: {
        post: savedPost,
      },
    });
  } catch (error) {
    console.error("Error creating the post", error);
    res.status(500).json({
      status: "error",
      message: "Internal Srever error",
    });
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      status: "success",
      data: {
        posts,
      },
    });
  } catch (error) {
    console.error("Error fetching the posts.", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

// Get post by ID
exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({
        status: "error",
        message: "Post not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (error) {
    console.error("Error fetching the post by ID:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
