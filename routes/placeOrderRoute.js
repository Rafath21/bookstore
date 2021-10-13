const express=require("express");
const router=express.Router();
const {placeorder}=require('../controllers/placeorderController');
const { isAuthenticated, isAuthorized } = require("../middlewares/auth");

router.route("/:name").get((req,res)=>{
    console.log("get request accepted with name",req.params.name)
    console.log("the query is:",req.query.bookid);
})
//keyword bookid should be passed
router.route("/:username").post(placeorder)
module.exports=router;