const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:true,default:"Male"},
    age:{type:Number,required:true,default:0},
    
    // posts:[
    //     {
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"post"
    //     }
    // ]
})

const User = mongoose.model("user",userSchema)

module.exports = User;