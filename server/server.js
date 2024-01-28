const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to MongoDB
mongoose.connect("mongodb://localhost:27017/coinBlog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// check MongoDB connection
mongoose.connection.on("connected", () => {
  console.log("connected to MongoDB");
});

// Routes
const userRoutes = require("./Routes/user");
const postRoutes = require("./Routes/postRoutes");

// User Routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
