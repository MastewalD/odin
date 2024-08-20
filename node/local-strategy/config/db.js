const mongoose = require("mongoose")
require("dotenv").config()
const connectDB =()=>{
    const DB = process.env.DB 
    mongoose.connect(DB,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("db connected")

    }).catch((err)=>console.error("error occured when connected to db ",err))
}
module.exports ={connectDB}