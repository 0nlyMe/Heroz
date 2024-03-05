const mongoose = require("mongoose");
require("dotenv").config();

let isConnected = false;

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongoDB is connected successfully..!");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "coinBlog-v2",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectToDB };
