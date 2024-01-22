const express = require("express");
const router = express.Router();
const User = require("../Models/User");

// Define your routes here
// Register a new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // check if the user already exists..
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
    }

    // create a new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    return res.status(201).json({ message: "User registerd successfully" });
  } catch (error) {
    console.error("Error registering user: ", error);
    return res.status(500).json({ message: "Internal Server error" });
  }
});

// Login a user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentaials" });
    }

    // updat user's login status
    user.isLoggedIn = true;
    await user.save();

    return res.status(200).json({ message: `${user.name} is now logged in` });
  } catch (error) {
    console.error(`Error logging in user`, error.response.data);
    return res.status(500).json({ message: "Internal server Error" });
  }
});

module.exports = router;
