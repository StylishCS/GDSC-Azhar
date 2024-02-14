const mongoose = require("mongoose");
const sponsorSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Sponsor = mongoose.model("Sponsor", sponsorSchema);
exports.Sponsor = Sponsor;
