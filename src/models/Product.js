const string = require("@hapi/joi/lib/types/string");
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
<<<<<<< HEAD
      contentType: String,
=======
>>>>>>> 2c6b8cfcd5ee7afaacedeffef97357149f46a436
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
