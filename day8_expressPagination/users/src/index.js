const express = require("express")
const  connect  = require("./configs/db")
const userController = require("./controllers/user.controller")
let PORT = 8000
let app = express()


app.use("/users",userController)





app.listen(PORT,async()=>{
    try{
        await connect()
        console.log(`Runnning on port ${PORT}`);
    }catch(err){
        console.log(err.message);
    }
})