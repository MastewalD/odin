const categoryModel = require("../models/categoryModel")
const categoryDetail = async(req,res)=>{
    const {id}= req.params
    const category = await categoryModel.findById(id)
    if(!category){
        res.status(404).json({message:"category not found!"})
    }
   
    res.render("category/categoryDetail",{category})
}
const getAllCategory =async(req,res)=>{
    const categorys = await categoryModel.find({})
    if(!categorys){
        res.status(404).json({message:"category is empty!"})
    }
   
    res.render("category/getAllCategory",{categorys})
}
const getCreateCategoryPage = async (req,res)=>{
    res.render("category/createCategory")
}
const createCategory = async(req,res)=>{
    const {categoryName,categoryDescription} = req.body
    const newCategory = new categoryModel({categoryName,categoryDescription})
    await newCategory.save()
    res.redirect("/category")
} 
const getUpdateCategoryPage= async (req,res)=>{
    const {id} = req.params
    const category =await categoryModel.findById(id)
    if(!category){
        res.status(404).json({message:"category not exist"})
    }

    res.render("category/updateCategory",{category})
}
const updateCategory= async(req,res)=>{
    const {id} = req.params
    const {categoryName,categoryDescription} = req.body
    await categoryModel.findByIdAndUpdate(id,{categoryName,categoryDescription})
     res.redirect("/category")
}
const deleteCategory= async (req,res)=>{
    const {id}= req.params
    await categoryModel.findByIdAndDelete(id)
    res.redirect('/category')
}
module.exports ={
    getAllCategory,
    getCreateCategoryPage,
    createCategory,
    getUpdateCategoryPage,
    updateCategory,
    deleteCategory,
    categoryDetail
}