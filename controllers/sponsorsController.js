const { Sponsor } = require("../models/Sponsor");
const cloudinary = require("../utils/cloudinary");

async function addSponsorController(req, res) {
  try {
    if (!req.cloudinaryResult.secure_url) {
      return res.status(400).json("Please provide a valid image.");
    }
    const sponsor = new Sponsor({
      image: req.cloudinaryResult.secure_url,
    });
    await sponsor.save();
    return res.status(201).json(sponsor);
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).send(errors);
    }
    console.log(error);
    return res.status(500).json("INTERNAL SERVER ERROR");
  }
}

async function getSponsorsController(res, res) {
  try {
    const sponsors = await Sponsor.find();
    if (!sponsors) {
      return res.status(404).json("No Sponsors Found..");
    }
    return res.status(200).json(sponsors);
  } catch (error) {
    return res.status(500).json("INTERNAL SERVER ERROR");
  }
}

async function deleteSponsorByIdController(req, res) {
  try {
    if (!req.params.id) {
      return res.status(400).json("Please provide a valid ID");
    }
    const sponsor = await Sponsor.findById(req.params.id);
    if (!sponsor) {
      return res.status(404).json("Sponsor Not Found..");
    }
    const publicId = sponsor.image.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(publicId);
    await Sponsor.findByIdAndDelete(req.params.id);
    return res.status(200).json("Sponsor Deleted Successfully");
  } catch (error) {
    console.log(error)
    return res.status(500).json("INTERNAL SERVER ERROR");
  }
}

module.exports = {
  addSponsorController,
  getSponsorsController,
  deleteSponsorByIdController,
};
