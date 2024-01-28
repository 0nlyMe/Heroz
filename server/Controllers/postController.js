const Post = require("../Models/Post");

exports.postController = async (req, res, next) => {
  console.log(req.body);

  try {
    const newPost = await Post.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        post: newPost,
      },
    });
  } catch (error) {
    console.error("Error creating the post", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
