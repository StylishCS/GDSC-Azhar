var express = require('express');
const { signupController,loginController, resendOTP, verifyUser } = require('../controllers/userAuthController');
const UserPrivileges = require('../middlewares/protect');
var router = express.Router();


router.post("/login", loginController);
router.post("/signup", signupController);
router.get("/resendOTP", UserPrivileges, resendOTP);
router.get("/verify", UserPrivileges, verifyUser);

module.exports = router;
