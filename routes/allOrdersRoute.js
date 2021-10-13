const express=require('express');
const app=express();
const router=express.Router();
const {allOrders,deleteOrder} =require('../controllers/allOrdersController')
router.route("/").get(allOrders).delete(deleteOrder);
module.exports=router;
