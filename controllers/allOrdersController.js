const Order=require('../models/User');
exports.allOrders=async(req,res)=>{
      try{
        let orders=await Order.find();
        res.status(400).send(orders);
    }
    catch(err){
        res.status(400).json({
            error:err.message
        })
    }
}
//delete an order
exports.deleteOrder=async(req,res)=>{
    try{
        let order=await Order.findById(req.body.orderid);
        order.remove();
        res.status(200).json({
            message:"Order deleted"
        })
    }catch(err){
        res.status(400).json({
            message:"Something went wrong!"
        })
    }
}