const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const fs= require("fs")

const PORT  = 8000;
let app = express()
app.use(express.json())
app.use(cors())

