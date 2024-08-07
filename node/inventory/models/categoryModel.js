const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    categoryName:{
        type: String,
        required:true
    },
    categoryDescription:{
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

module.exports = mongoose.model("category",categorySchema)