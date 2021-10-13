const express=require('express');
const app=express();
const router=express.Router();

const {login,register,forgotPassword,resetPassword,logout}=require("../controllers/authController");
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/forgotpassword').post(forgotPassword);
router.route('/passwordreset/:resetToken').put(resetPassword);
router.route('/logout').post(logout);
module.exports=router;