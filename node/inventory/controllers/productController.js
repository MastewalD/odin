const productModel = require("../models/productModel")
const categoryModel = require("../models/categoryModel")
const productDetail = async(req,res)=>{
    const {id}= req.params
    const product = await productModel.findById(id)

    if(!product){
        res.status(404).json({message:"product not found!"})
    }
 
    const categoryId = product.category
    const category= await categoryModel.findById(categoryId)

    // console.log(category)
   
    res.render("product/productDetail",{product,category})
}

const getAllProduct =async(req,res)=>{
    const products = await productModel.find({})
    if(!products){
        res.status(404).json({message:"product is empty!"})
    }
    res.render("product/getAllProduct",{products})
}
const getCreateProductPage = async (req,res)=>{
    try {
        const categorys = await categoryModel.find();
        console.log(categorys)
        res.render("product/createProduct", { categorys });
      } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching categories');
      }
}
const createProduct = async(req,res)=>{
    const {productName,category,productDescription} = req.body

    const newProduct = new productModel({productName,category,productDescription})
    await newProduct.save()
    res.redirect("/product")
} 
const getUpdateProductPage= async (req,res)=>{
    const {id} = req.params
    const product = await productModel.findById(id)
    if(!product){
        res.status(404).json({message:"product not exist"})
    }

    res.render("product/updateProduct",{product})
}
const updateProduct= async(req,res)=>{
    const {id} = req.params
    const {productName,productDescription} = req.body
    await productModel.findByIdAndUpdate(id,{productName,productDescription})
     res.redirect("/product")
}
const deleteProduct= async (req,res)=>{
    const {id}= req.params
    await productModel.findByIdAndDelete(id)
    res.redirect('/product')
}
const searchProduct=async(req,res)=>{
    const {category} =req.body
    const products = await productModel.find({category:category})
    if(!products){
        res.status(404).json({message:"product not found"})
    }
    res.render("home",{products})
}
module.exports ={
    getAllProduct,
    getCreateProductPage,
    createProduct,
    getUpdateProductPage,
    updateProduct,
    deleteProduct,
    productDetail,
    searchProduct
}