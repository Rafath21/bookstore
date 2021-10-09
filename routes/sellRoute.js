const express=require("express");
const router=express.Router();
const {sellBooks}=require("../controllers/sellController");
const {myBooks}=require("../controllers/myBooksController");
router.route("/:id").get(myBooks);
router.route("/:id").post(sellBooks);
module.exports=router;
