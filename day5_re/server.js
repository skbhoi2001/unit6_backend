const express = require("express");
const users = require('./users.json')
// const mongoose = require("mongoose")
const cors = require("cors")
const fs= require("fs")

const PORT  = 8000;
let app = express()
app.use(express.json())
app.use(cors())

// const DB_URL = "mongodb://127.0.0.1:27017/test"
// mongoose.connect(DB_URL)
//Get the default connection
// var db = mongoose.connection;
// const UserModel = require("./schema/user.schema")
// app.get("/users",async (req,res)=>{
//     let users = await UserModel.find({})
//     res.status(200).json(users)
// })


app.get("/users", (req,res)=>{
    res.status(200)
    res.json(users)
})

app.put("/users/:index", (req,res)=>{
    let {index} = req.params;
    let updatedDAta = req.body;
    users.splice(index,1,{
        ...users[index],
        ...updatedDAta,
    })
    fs.writeFileSync(`${__dirname}/users.json`,JSON.stringify(users))
    res.json(users)
})



// db.on('error', console.error.bind(console, 'MongoDB connection error:'));






app.listen(PORT,()=>{
    console.log(`Listining on Port ${PORT} `);
})
