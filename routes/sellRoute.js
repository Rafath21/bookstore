const express=require("express");
const router=express.Router();
const {sellBooks}=require("../controllers/sellController");
const {soldBooks}=require("../controllers/soldBooksController");
router.route("/:id").get(soldBooks);
router.route("/:id").post(sellBooks);
module.exports=router;
