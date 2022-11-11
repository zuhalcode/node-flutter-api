const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      max: 255,
      required: true,
    },

    slug: {
      type: String,
      max: 100,
      required: true,
      unique: true,
    },

    parentId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
