const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    "first_name":String,
    "last_name":String,
    "email":String,
    "gender":String,
    "age":Number
});

const UserModel = mongoose.model("user",userSchema)

module.exports = UserModel