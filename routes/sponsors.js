var express = require("express");
var router = express.Router();
const multer = require("multer");

const uploadToCloudinary = require("../middlewares/uploadToCloudinary");
const {
  addSponsorController,
  deleteSponsorByIdController,
  getSponsorsController,
} = require("../controllers/sponsorsController");
const AdminPrivileges = require("../middlewares/isAdmin");
const fileUpload = multer();


router.post(
  "/add",
  AdminPrivileges,
  fileUpload.single("image"),
  uploadToCloudinary,
  addSponsorController
);
router.get("/", getSponsorsController);
router.delete("/delete/:id",AdminPrivileges, deleteSponsorByIdController);

module.exports = router;
