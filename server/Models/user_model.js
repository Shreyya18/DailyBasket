const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:String},
    address:{type:String},
})
module.exports = mongoose.model("User", userschema)