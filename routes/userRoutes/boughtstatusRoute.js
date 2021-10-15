//route for a single book's (details) that is being bought by the current user
const express=require('express');
const app=express();
const router=express.Router();
const {boughtStatus} =require('../../controllers/userControllers/boughtstatusController');
router.route('/:id').get(boughtStatus);
module.exports=router;
