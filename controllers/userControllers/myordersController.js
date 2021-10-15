//basically, all my orders

const Order = require("../../models/Order")

exports.myOrders=async(req,res,next)=>{
    try{
    let orders=await Order.find({boughtBy:req.params.username})
    res.status(200).json({
        orders
    })
    }
    catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}