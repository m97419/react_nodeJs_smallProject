const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userName:{
        type:String
    },
    email:{
        type:mongoose.Schema.Types.String
    },
    address:{
        type:String
    },
    phone:{
        type:mongoose.Schema.Types.String
    }
},{
    timestamps:true
})

module.exports = mongoose.model('User',userSchema)