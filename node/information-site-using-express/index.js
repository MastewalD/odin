const express = require("express")
const path = require("path")

const app = express()
app.use(express.static(path.join(__dirname,"views")))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"))
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","about.html"))
})
app.get("/contact-us",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","contact-us.html"))
})
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","404.html"))
})
app.listen(5000,()=>console.log("The server run on port 5000"))