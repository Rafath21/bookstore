const mongoose=require('mongoose');
let BookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a Book name"]
    },
    soldby:{
        type:String,
        required:[true,"Please give the username"]
    },
    soldbyId:{
        type:String,
        required:[true]
    },
    img:{
        type:String
    },
    postedOn:Date,
    price:{
        type:Number,
        required:[true,"Price is required"]
    },
    cardno:{
        type:String
    }
})
let Book=mongoose.model("Books",BookSchema);
module.exports=Book;