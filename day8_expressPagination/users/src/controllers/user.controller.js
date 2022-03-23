const express = require("express");
const User = require("../models/user.model");
const { body, validationResult } = require('express-validator');
const {upload} = require("../utils");
const  transporter  = require("../configs/mail");

const router = express.Router()
// const upload = multer({ dest: `${__dirname}/../../uploads`})




router.get("/", async(req,res)=>{
    const {page = 1,pageSize = 3} = req.query;

    let offeset = (page-1)*pageSize

    let users = await User.find().skip(offeset).limit(pageSize);
    let totalPages = Math.ceil((await User.find().countDocuments())/pageSize);
    res.status(200).json({data:users,totalPages})
})
router.post("/", 
    // body('first_name').isLength({min:3,max:10}).withMessage("FN is required and minimum and max length is 3 and 10"),
    // body('last_name').isLength({min:3,max:10}).withMessage("FN is required and minimum and max length is 3 and 10"),
    // body('age').isFloat({min:18,max:100}).withMessage("age be in between 18 to 100"),
    // body('email').isEmail().withMessage("Check Email"),
    // upload.array("avatar"),
    async(req,res)=>{
    //  console.log(req.body);   
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    try{
        let currentCount = await User.find().countDocuments()
        let createUser = await User.create({
            ...req.body,
            id:currentCount+1,
            // avatar:req.files.map((f) => f.path),
        });


          // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: createUser.email, // list of receivers
    subject: "User Register Successfully", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>1Hello world?</b>", // html body
    attachments:[
        {
            filename:"Attachment 1",
            path:`${__dirname}/../../package.json`
        }
    ],
    alternatives:[
        {
            contentType:'text/html',
            path:`${__dirname}/template.html`
        }
    ]
  });

        res.status(200).send("Registeration Email Sent")
        // res.status(200).json(createUser)
    }catch(e){
        res.send(400).send(e.message)
    }
})

module.exports =router;


//1.04