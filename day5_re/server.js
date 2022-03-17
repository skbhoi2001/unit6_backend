const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")

const PORT  = 8000;
let app = express()
app.use(express.json())
app.use(cors())
const DB_URL = "mongodb://127.0.0.1:27017/test"

mongoose.connect(DB_URL)

//Get the default connection
var db = mongoose.connection;

const UserModel = require("./schema/user.schema")


app.get("/users",async (req,res)=>{
    let users = await UserModel.find({})
    res.status(200).json(users)
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'));






app.listen(PORT,()=>{
    console.log(`Listining on Port ${PORT} `);
})
