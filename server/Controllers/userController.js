const express = require("express");
// const router = express.Router();
const User = require("../Models/User");

// fetch all the users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("error fetching user data", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};