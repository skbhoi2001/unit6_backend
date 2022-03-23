const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const authorController = require("./controllers/author.controller")
const bookController = require("./controllers/book.controller")
const sectionController = require("./controllers/section.controllers")

const PORT = 8000
const DB_URL = "mongodb+srv://skb:Soumyak_2001@cluster0.u48yl.mongodb.net/lib-sys?retryWrites=true&w=majority"


const app = express();
app.use(express.json())
app.use(cors())

//middleware

app.use("/authors",authorController)
app.use("/sections",sectionController)
app.use("/books",bookController)


const connect = ()=>{
    return mongoose.connect(DB_URL)
}

app.listen(PORT,async ()=>{
    try{
    await connect()
    console.log(`${PORT}`);
    }catch(err){
        console.log(err.message);
    }
})