const mongoose = require("mongoose");
const answerSchema = new mongoose.Schema({
    message:{type:String,required:true},
    createdAt:{type:Date,default:Date.now()},
    post:{type:mongoose.Schema.Types.ObjectId,ref:"post"},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
})

const Answer = mongoose.model("answer",answerSchema)

module.exports = Answer;