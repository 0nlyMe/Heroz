const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: "string",
    trim: true,
    unique: true,
  },
});

const category = mongoose.model("Category", categorySchema);
module.exports = category;
