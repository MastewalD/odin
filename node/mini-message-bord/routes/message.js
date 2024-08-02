const express = require("express")
const route = express.Router()
let id =2
let messages=[
  {id:1,name:'maste',text:"hello world",date:new Date()},
  {id:2,name:'tutu',text:"hello again",date:new Date()}

]

route.get("/detail/:id",(req,res)=>{
  let {id} = req.params
  let message = messages.find(item=>item.id == id)
  res.render("message",{messages:[message]})
})
route.get("/",(req,res)=>{
  res.render('message',{messages})
})
route.get("/create",(req,res)=>{
  res.render("createMessages")
})
route.post("/create",(req,res)=>{
  id++
  const {name,text} = req.body
  const newMessage ={
    id,name,text,date:new Date()
  }
  messages.push(newMessage)
  res.redirect("/message")
})

module.exports = route