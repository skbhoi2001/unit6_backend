const express = require("express")
const mongoose = require("mongoose")

let app  = express()
const PORT  = 8000
const DB_URL = "mongodb://127.0.0.1:27017/test"

// try{
    mongoose.connect(DB_URL)
    //Get the default connection
    var db = mongoose.connection;

    const  UserModel = require("./schema/user.schema")
    

    app.get("/users",async (req,res)=>{
       let users =   await UserModel.find({})
        res.status(200).json(users)
    })

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// }catch(err){
    
// }






app.listen(PORT, ()=>{
    console.log(`Listinging on port ${PORT}`);
})