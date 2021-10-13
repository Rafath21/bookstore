const Book=require("../models/Books");
const User=require("../models/User");
const sendEmail=require('../utils/sendEmail');

exports.sellBooks=async(req,res)=>{
    const id=req.params.id;
    if(id==""){
        res.status(300).json({
            message:"Please login to post!"
        })
    }
    const {bookname,img,price}=req.body;
    let user=await User.findById(id);
    if(!user){
        res.status(400).json("User does not exist");
    }
    let username=user.username;
    console.log("username:",username);
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
    const message=`
       <h1>Hey ${username}! Your book has just been added to the portal.</h1>
       <p>We will get back to you as soon as someone orders your book.</p>`;
        await sendEmail({
               to:user.email,
               subject:"Book Added!",
               text:message,
           })
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