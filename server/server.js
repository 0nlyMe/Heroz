const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./Routes/user");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// connect to MongoDB
mongoose.connect("mongodb://localhost:27017/login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// check MongoDB connection
mongoose.connection.on("connected", () => {
  console.log("connected to MongoDB");
});

// User Routes
app.use("/api/user", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
