const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    title:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    body:{type:String,required:true},
    tags:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"tag"
        }
    ]
    // answers:[
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:"answer"
    //     }
    // ]
})

const Post = mongoose.model("post",postSchema)

module.exports = Post;



//! 1.18