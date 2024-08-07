const mongoose = require("mongoose")
const categoryModel = require("./categoryModel")

const productSchema = mongoose.Schema({
    productName:{
        type: String,
        required:true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    productDescription:{
        type: String,
        required:true
       
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    updatedAt:{
        type: Date,
        default: new Date()
    }

},{timestamp:true})

module.exports = mongoose.model("product",productSchema)