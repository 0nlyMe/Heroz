const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isLoggedIn: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
