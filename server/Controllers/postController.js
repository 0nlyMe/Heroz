const Post = require("../Models/Post");

// Create A new Post
exports.createPost = async (req, res) => {
  try {
    const { title, content, mediaURL, category } = req.body;

    // new post with the data
    const newPost = new Post({
      title,
      content,
      image: mediaURL,
      category,
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

// Get all Post
exports.getAllPosts = async (req, res) => {
  try {
    let filter = {};
    const sortBy = req.query.sortBy || "newest";

    if (
      req.params.categoryName &&
      req.params.categoryName.toLowerCase() != "all"
    ) {
      filter = { category: req.params.categoryName.toLowerCase() };
    }

    // query without any filter
    let query = Post.find();

    // category filter
    query = query.where(filter);

    if (sortBy === "popular") {
      query = query.sort({ likes: -1 });
    } else if (sortBy === "az") {
      query = query.sort({ title: 1 });
    } else {
      query = query.sort({ createdAt: -1 });
    }

    // Limit posts to 10
    query = query.limit(10);

    const posts = await query.exec();

    res.status(200).json({
      status: "success",
      data: {
        posts,
      },
    });
  } catch (error) {
    console.error("Error fetching the posts", error);
    res.status(500).json({
      status: "error",
      message: "post Control Internal Server error",
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

// Search Post
exports.searchPosts = async (req, res) => {
  try {
    const searchTerm = req.params.term;
    const filterdPosts = await Post.find({
      title: { $regex: new RegExp(searchTerm, "i") },
    });
    res.status(200).json({
      status: "success",
      data: {
        posts: filterdPosts,
      },
    });
  } catch (error) {
    console.error("error searching posts: ", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

// Like a post
exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }

    if (!post.likes || isNaN(post.likes)) {
      post.likes = 0;
    }

    post.likes += 1;

    await post.save();

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (error) {
    console.error("Error fetching the post", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server error",
    });
  }
};
