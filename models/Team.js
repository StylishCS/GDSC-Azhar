const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 255,
      required: true,
    },
    images: {
      type: [String],
      minLength: 2,
      maxLength: 255,
      required: true,
    }
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", teamSchema);
exports.Team = Team;
