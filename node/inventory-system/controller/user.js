const userModel = require("../models/user")


const getAllUser = async(req,res)=>{
    const users = await userModel.find({})
    if(!users){
        res.json({message:"user not exist"})
    }
    res.render("getUser",{users})
}
const getDetail = async(req,res)=>{
    const {id} = req.params
    const user = await userModel.findById(id)
    console.log(user)
    res.render("detail",{user})
}
const getCreatePage = async(req,res)=>{
    res.render("createUser")
}
const createUser = async(req,res)=>{
    const {firstName,lastName} = req.body
    const newUser = new userModel({firstName,lastName})
    await newUser.save()
    res.redirect("/user")
}
const getUpdateUser = async(req,res)=>{
    const {id} = req.params
    const user = await userModel.findById(id)
    res.render('updateUser',{user})
}
const updateUser = async(req,res)=>{
    const {id} = req.params
    const {firstName,lastName} = req.body
   const user = await userModel.findByIdAndUpdate(id,{firstName,lastName})
   if(!user){
    res.status(404).json({message:"user not found"})
   }
    res.redirect("/user")
    
}
const deleteUser = async(req,res)=>{
    const {id} = req.params
    const user= await userModel.findByIdAndDelete(id)
    if(!user){
        res.status(404).json({message:"user not found"})
    }
    res.redirect('/user')
}
module.exports ={
    getAllUser,
    getDetail,
    getUpdateUser,
    updateUser,
    getCreatePage,
    createUser,
    deleteUser
}