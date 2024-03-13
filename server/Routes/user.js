const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");
const userController = require("../Controllers/userController");
const authMiddleware = require("../Middleware/authMiddleware");

// Register a new user
router.post("/register", authController.register);

// Login a user
router.post("/login", authController.login);

// Get all the user details
router.get("/userdetails", userController.getAllUsers);


module.exports = router;
