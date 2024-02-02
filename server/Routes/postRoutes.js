const express = require("express");
const router = express.Router();
const postController = require("../Controllers/postController");

router.post("/add", postController.createPost);
router.get("/posts", postController.getAllPost);
router.get("/:postId", postController.getPostById);

module.exports = router;
