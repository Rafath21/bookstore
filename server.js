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
app.use("/api/v1/auth",require('./routes/authRoutes/authRoute'));
app.use("/api/v1/home",require('./routes/userRoutes/homeRoute'));
app.use("/api/v1/sell",require('./routes/userRoutes/sellRoute'));

app.use("/api/v1/orders", require('./routes/userRoutes/myordersRoute')); //id here is user id

app.use("/api/v1/soldstatus",require('./routes/userRoutes/soldstatusRoute')); //id here is the id of one single book sold

app.use("/api/v1/boughtstatus",require('./routes/userRoutes/boughtstatusRoute')) //id here is id of one single book bought

app.use("/api/v1/placeorder",require("./routes/userRoutes/placeOrderRoute")) //id here is id of the book currently being ordered
app.use("/api/v1/allusers",require('./routes/adminRoutes/allUsersRoute'))
app.use("/api/v1/allorders",require('./routes/adminRoutes/allOrdersRoute'))
app.use("/api/v1/allbooks",require('./routes/adminRoutes/allBooksRoute'))

app.listen(PORT,()=>{
 console.log(`server is listening at:${PORT}`);
})

