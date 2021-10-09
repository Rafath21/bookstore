const User=require("../models/User");
exports.myBooks=async(req,res)=>{
    const id=req.params.id;
    if(id==""){
        res.status(300).json({
            message:"Please login to see your data!"
        })
    }
    try{
    let user=await User.findById(id);
    if(user){
        res.status(200).json({
            data:user.sold,
        })
    }else{
        res.status(400).json({
            message:"User does not exist"
        })
    }
    }
    catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}
