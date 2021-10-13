const Order=require('../models/Order');
const mongoose=require('mongoose');
//info of the book that is currently being bought
exports.bookbought=async(req,res,next)=>{
 let bookid=req.params.id;
 try{
 const booksold = await Order.findOne({ book:  mongoose.Types.ObjectId(bookid) });
 res.status(200).send(booksold);
 }
 catch(err){
     res.status(400).json({
         error:err.message
     })
 }
}