const express = require("express");
const Author = require("../models/author.model");

const router = express.Router();

router.get("/",async(req,res)=>{
    const authors = await Author.find({})
    res.status(200).json(authors)
})
router.get("/:id",(req,res)=>{})
router.post("/",async (req,res)=>{
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author);
      } catch (err) {
        return res.status(500).send(err.message);
      }
})
router.patch("/:id",(req,res)=>{})
router.delete("/:id",(req,res)=>{})

module.exports = router