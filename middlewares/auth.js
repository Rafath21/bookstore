const jwt=require('jsonwebtoken');
const ErrorResponse=require("../utils/errorResponse");
const User=require('../models/User');

exports.isAuthenticated=async(req,res,next)=>{
const {token}=req.cookies;
if(!token){
    return next(new ErrorResponse("Please login to view the resourse",401));

}
const decodedData=jwt.verify(token,process.env.JWT_SECRET);
req.user=await User.findById(decodedData.id);
next();
}
exports.isAuthorized=(...roles)=>{
    return(req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next(
                new ErrorResponse(
                    `Role: ${req.user.role} is not allowed to access this resource`,
                    403
                )
            )
        }
        next();
    }
}