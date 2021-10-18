const express=require("express");
const {processPayment,sendStripeKey} =require("../../controllers/paymentController");

const router=express.Router();
const {isAuthenticatedUser} =require("../../middlewares/auth");

router.route("/process").post(isAuthenticatedUser,processPayment);
router.route("/stripeapikey").get(isAuthenticatedUser,sendStripeKey);

module.exports=router;