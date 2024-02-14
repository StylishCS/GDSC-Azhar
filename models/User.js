const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 255,
      required: true,
    },
    email: {
      type: String,
      minLength: 2,
      maxLength: 255,
      required: true,
    },
    password: {
      type: String,
      minLength: 2,
      maxLength: 255,
      required: true,
    },
    verified: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
exports.User = User;
