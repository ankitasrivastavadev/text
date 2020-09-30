require('dotenv').config();
const mongoose=require("mongoose");
const express=require("express");
const app= express();
const bodyParser = require("body-parser");
const cookieParser= require("cookie-parser");
const cors=require("cors");

//my routes
const authRoutes=require("./routes/auth.js");
const userRoutes =require("./routes/user");

//db connection
mongoose.connect(process.env.DATABASE, 
{useNewUrlParser: true,
useUnifiedTopology:true,
useCreateIndex:true})
.then(()=>{
    console.log("DB CONNECTED")
});

//middleware

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//my routes
app.use("/api",authRoutes);
app.use("/api",userRoutes);

//ports
const port =process.env.PORT||8000;

//starting a server
app.listen(port,()=>{
    console.log(`app is running at ${port}`);
});
