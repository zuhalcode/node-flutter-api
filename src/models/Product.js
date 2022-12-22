const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      max: 255,
      required: true,
    },

    category: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
      maxLength: 32,
    },

    desc: {
      type: String,
      max: 255,
    },

    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
