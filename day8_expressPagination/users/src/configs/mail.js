const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "86539dd0610895",
      pass: "08ad14955bf70e"
    }
  });


  module.exports = transport