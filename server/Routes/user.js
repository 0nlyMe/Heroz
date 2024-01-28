const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");
const userController = require("../Controllers/userController");

// Register a new user
router.post("/register", authController.register);

// Login a user
router.post("/login", authController.login);

router.get("/userdetails", userController.getAllUsers);

module.exports = router;
