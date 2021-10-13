//route for a single book's (details) that is being sold by the current user
const express=require('express');
const app=express();
const router=express.Router();
const {booksoldGet,booksoldPost} =require('../controllers/booksoldController');
router.route('/:id').get(booksoldGet);
router.route('/:id').put(booksoldPost);
module.exports=router;

