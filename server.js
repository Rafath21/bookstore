const express=require('express');
const app=express();
const cors=require("cors");
const connectDB=require('./config/db');
require('dotenv').config({path:"./config.env"});
const PORT=process.env.PORT;
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
connectDB();
app.use("/api/v1/auth",require('./routes/authRoute'));
app.use("/api/v1/home",require('./routes/homeRoute'));
app.use("/api/v1/sell",require('./routes/sellRoute'));

//app.use("/api/v1/orders/:id", require('./routes/myordersRoute')); //id here is user id

app.use("/api/v1/booksold",require('./routes/booksoldRoute')); //id here is the id of one single book sold

app.use("/api/v1/bookbought",require('./routes/bookboughtRoute')) //id here is id of one single book bought

app.use("/api/v1/placeorder",require("./routes/placeOrderRoute")) //id here is id of the book currently being ordered
app.use("/api/v1/allusers",require('./routes/allUsersRoute'))
app.use("/api/v1/allorders",require('./routes/allOrdersRoute'))

app.listen(PORT,()=>{
 console.log(`server is listening at:${PORT}`);
})

