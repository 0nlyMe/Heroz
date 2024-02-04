const express = require("express");
const router = express.Router();
const postController = require("../Controllers/postController");

router.get("/posts", postController.getAllPosts);
router.post("/add", postController.createPost);
router.get("/popular", postController.getAllPosts);

router.get("/search/:term", postController.searchPosts);
router.post("/:postId/like", postController.likePost);
router.get("/category/:categoryName", postController.getAllPosts);
router.get("/popular/category/:categoryName", postController.getAllPosts);
router.get("/:postId", postController.getPostById);

module.exports = router;
