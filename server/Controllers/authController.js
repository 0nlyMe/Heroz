const User = require("../Models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secrectKey = process.env.JWT_SECRET;

exports.register = async (req, res) => {
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

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id, name: newUser.name }, secrectKey);

    return res
      .status(201)
      .json({ message: "User registerd successfully", token });
  } catch (error) {
    console.error("Error registering user: ", error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentaials" });
    }

    // updat user's login status
    user.isLoggedIn = true;
    await user.save();

    // Generate JWT Token
    const token = jwt.sign({ id: user._id, name: user.name }, secrectKey);

    console.log(token);

    return res.status(200).json({
      message: "user is now logged in",
      token,
    });
  } catch (error) {
    console.error(`Error logging in user`, error);
    return res.status(500).json({ message: "Internal server Error" });
  }
};
