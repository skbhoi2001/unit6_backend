const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://skb:Soumyak_2001@cluster0.u48yl.mongodb.net/lib-sys?retryWrites=true&w=majority"
  );
};

module.exports = connect;