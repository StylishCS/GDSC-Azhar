const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);
exports.Admin = Admin;
