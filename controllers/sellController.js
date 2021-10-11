const Book=require("../models/Books");
const User=require("../models/User");
exports.sellBooks=async(req,res)=>{
    const id=req.params.id;
    if(id==""){
        res.status(300).json({
            message:"Please login to post!"
        })
    }
    const {bookname,img,price}=req.body;
    let user=await User.findOne({id});
    if(!user){
        res.status(400).json("User does not exist");
    }
    console.log("doc:",user);
    let username=user.username;
    const obj={
        name:bookname,
        soldby:username,
        soldbyId:id,
        img:img,
        price:price,
    }
    try{
    let bookCreated=await Book.create(obj);
    user.addSold(bookCreated._id);
    await user.save();
    
    res.status(200).json({
        message:"Book added successfully!"
    })
    }
    catch(err){
        res.status(400).json({
            message: err.message
        })
    }
    
}