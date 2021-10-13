const mongoose=require('mongoose');
let BookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide a Book name"]
    },
    soldby:{  //from user db
        type:String,
        required:[true,"Please give the username"]
    },
    soldbyId:{  //from params
        type:String,
        required:[true]
    },
    img:{
        type:String,
        required:[true],
    },
    postedOn:Date,
    price:{
        type:Number,
        required:[true,"Price is required"]
    },
    bookStatus:{
        type:String,
        default:"unsold"
    }
})
BookSchema.methods.updatebookStatus=function(status){
 this.bookStatus=status;
}
let Book=mongoose.model("Books",BookSchema);
module.exports=Book;