//route for a single book's (details) that is being bought by the current user
const express=require('express');
const app=express();
const router=express.Router();
const {bookbought} =require('../controllers/bookboughtController');
router.route('/').get(bookbought);
module.exports=router;

