const express=require("express");
const router=express.Router();
const {sellBooks}=require("../../controllers/userControllers/sellController");
const {soldBooks}=require("../../controllers/userControllers/soldBooksController");
router.route("/:id").get(soldBooks);
router.route("/:id").post(sellBooks);
module.exports=router;
