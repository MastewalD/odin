const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName:{
        type : String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    updatedAt:{
        type: Date,
        default: new Date()
    },
    
},{timestamp:true})

module.exports = mongoose.model("user",userSchema)