const mongoose = require("mongoose")

const DB_URL = "mongodb://127.0.0.1:27017/test2"
// const DB_URL = "mongodb://127.0.0.1:27017/usersDb"

const connect = async ()=>{
    return mongoose.connect(DB_URL)
}


module.exports = connect
