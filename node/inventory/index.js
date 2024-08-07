const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const productRoute = require("./routes/productRoute")
const categoryRoute = require("./routes/categoryRoute")

require("dotenv").config()
const DB = process.env.DB 
const PORT = process.env.PORT


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"views")))
app.set("view engine", "ejs")

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("db connected")
    app.listen(PORT,()=>console.log(`The server run on port number ${PORT}`))
})

app.get("/",(req,res)=>{
   const products ={}
    res.render("home",{products})
})

app.use("/product",productRoute)
app.use("/category",categoryRoute)


