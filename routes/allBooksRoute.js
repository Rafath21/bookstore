const express=require('express');
const app=express();
const router=express.Router();
const {allBooks,deleteBook} =require('../controllers/allBookssController')
router.route("/").get(allBooks).delete(deleteBook);
module.exports=router;
