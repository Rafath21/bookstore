const express=require('express');
const app=express();
const cors=require("cors");
const connectDB=require('./config/db');
require('dotenv').config({path:"./config.env"});
const PORT=process.env.PORT;
app.use(cors());
app.use(express.json())
app.get("/",(req,res,next)=>{
    res.send("Api running");
})
connectDB();
//app.use("/books",require('./routes/bookRoute'))
app.use("/auth",require('./routes/authRoute'));
app.use("/",require('./routes/homeRoute'));
app.use("/sell",require('./routes/sellRoute'));

app.listen(PORT,()=>{
 console.log(`server is listening at:${PORT}`);
})

