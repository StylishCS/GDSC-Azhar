var express = require("express");
const AdminPrivileges = require("../middlewares/isAdmin");
var router = express.Router();


router.get("/", );
router.post("/add", AdminPrivileges, );
router.delete("/delete/:id", AdminPrivileges, );

module.exports = router;
