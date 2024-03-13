const jwt = require("jsonwebtoken");
require("dotenv").config();

const secrectKey = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  try {
    // verify the token
    const decoded = jwt.verify(token, secrectKey);

    //   Attach the user id from the token to the request object for further processing
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Error verifying the user", error);
    return res
      .status(403)
      .json({ message: "Invalid token || Internal Server Error" });
  }
};

module.exports = authMiddleware;
