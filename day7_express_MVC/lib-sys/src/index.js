const express = require("express")
const mongoose = require("mongoose")
const PORT = 8000

const app = express()

app.listen(PORT,()=>{
    console.log(`${PORT}`);
})