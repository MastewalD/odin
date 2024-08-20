const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        
      },
      password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 100
      },
})
module.exports = mongoose.model("user",userSchema)
