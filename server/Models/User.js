const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  isLoggedIn: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
