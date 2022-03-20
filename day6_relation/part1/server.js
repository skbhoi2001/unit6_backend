const express = require("express");
const mongoose = require("mongoose")
const User = require("./schema/user.schema")
const Post = require("./schema/post.schema");
const Tag = require("./schema/tags.schema");
const Answer = require("./schema/answers.schema");

const PORT = 8000;
const DB_URL = "mongodb+srv://skb:Soumyak_2001@cluster0.u48yl.mongodb.net/stackover?retryWrites=true&w=majority"


const app = express();
app.use(express.json())


const connect = ()=>{
    return mongoose.connect(DB_URL)
}


app.get("/users",async (req,res)=>{
    let users = await User.find({});
    res.status(200).json(users)
})

app.get("/users/:id",async (req,res)=>{
    let users = await User.findById(req.params.id)
    res.status(200).json(users)
})

app.patch("/users/:id",async (req,res)=>{
    let users = await User.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
    })
    res.status(200).json(users)
})

app.post("/users", async (req,res)=>{
    try{
        let createedUser = await User.create(req.body)
    res.status(200).json(createedUser)
    }catch(err){
        res.send(400).send(err.message)
    }
})

app.get("/posts",async (req,res)=>{
    let posts = await Post.find({}).populate("tags");
    res.status(200).json(posts)
})

//get post from specefic user
app.get("/posts/userId",async (req,res)=>{
    let posts = await Post.find({user:req.params.userId}).populate("tags");
    res.status(200).json(posts)
})
app.post("/posts", async (req,res)=>{
    try{
        let createedPost = await Post.create(req.body)
    res.status(200).json(createedPost)
    }catch(err){
        res.send(400).send(err.message)
    }
})

app.get("/tags", async (req,res)=>{
    try{
    let tags = await Tag.find()
    res.status(200).json(tags)
    }catch(err){
        res.send(400).send(err.message)
    }
})

app.post("/tags", async (req,res)=>{
    try{
        let createedTag = await Tag.create(req.body)
    res.status(200).json(createedTag)
    }catch(err){
        res.send(400).send(err.message)
    }
})

app.get("/answers", async (req,res)=>{
    try{
    let answers = await Answer.find()
    res.status(200).json(answers)
    }catch(err){
        res.send(400).send(err.message)
    }
})
app.post("/answers", async (req,res)=>{
    try{
        let createAnswer = await Answer.create(req.body)
    res.status(200).json(createAnswer)
    }catch(err){
        res.send(400).send(err.message)
    }
})










app.listen(PORT,async ()=>{
    try{
    await connect()
    console.log(`${PORT}`);
    }catch(err){
        console.log(err.message);
    }
})