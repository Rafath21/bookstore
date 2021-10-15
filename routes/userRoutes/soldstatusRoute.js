//route for a single book's (details) that is being sold by the current user
const express=require('express');
const app=express();
const router=express.Router();
const {soldstatusGet,soldstatusPost} =require('../../controllers/userControllers/soldstatusController');
router.route('/:id').get(soldstatusGet);
router.route('/:id').put(soldstatusPost);
module.exports=router;

