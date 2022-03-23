const express = require("express");
const User = require("../models/user.model");
const router = express.Router()


router.get("/", async(req,res)=>{
    const {page = 1,pageSize = 3} = req.query;

    let offeset = (page-1)*pageSize

    let users = await User.find().skip(offeset).limit(pageSize);
    let totalPages = Math.ceil((await User.find().countDocuments())/pageSize);
    res.status(200).json({data:users,totalPages})
})
router.post("/", async(req,res)=>{
    try{
        let createUser = await User.create(req.body);
    res.status(200).json(createUser)
    }catch(e){
        res.send(400).send(e.message)
    }
})

module.exports =router;