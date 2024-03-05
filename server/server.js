const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to MongoDB
const { connectToDB } = require("./MongoDB/database");

connectToDB().then(() => {
  // Routes
  const userRoutes = require("./Routes/user");
  const postRoutes = require("./Routes/postRoutes");

  // User Routes
  app.use("/api/user", userRoutes);
  app.use("/api/post", postRoutes);

  // Start the server
  const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  server.on("error", (error) => {
    console.error("Error starting the server:", error);
  });
});

// check MongoDB connection
mongoose.connection.on("connected", () => {
  console.log("connected to MongoDB");
});
