const Book=require("../models/Books");
const User=require("../models/User");
exports.sellBooks=async(req,res)=>{
    const id=req.params.id;
    if(id==""){
        res.status(300).json({
            message:"Please login to post!"
        })
    }
    const {username,bookname,img,price,cardno}=req.body;
    const obj={
        name:bookname,
        soldby:username,
        soldbyId:id,
        img:img,
        price:price,
        cardno:cardno
    }
    try{
    await Book.create(obj);
    let user=await User.findById(id);
    if(user){
         user.addSold(obj);
         await user.save();
    }else{
        res.status(400).json({
            message:"Cannot add book. Something went wrong"
        })
    }
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