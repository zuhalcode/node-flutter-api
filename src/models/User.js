const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      max: 255,
      required: true,
    },

    email: {
      type: String,
      max: 100,
      required: true,
    },

    password: {
      type: String,
      min: 6,
      max: 1024,
      required: true,
    },
    isAdmin: Boolean,
    avatar: String,
    tokens: [{ type: Object }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
