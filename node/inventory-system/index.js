const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const userRoute = require("./routs/userRoute")
require("dotenv").config()
const DB = process.env.DB
const PORT = process.env.PORT
const app = express()
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"views")))
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("db connected")
    app.listen(PORT,()=>console.log(`The server run on port number ${PORT}`))
})

app.get("/",(req,res)=>{
    res.render("home")
})
app.use("/user",userRoute)