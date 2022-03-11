const express = require("express");
const users = require("./db.json")
const PORT = 8000;

function logger(req,res,next){
    console.log(`call ${req.method} to ${req.url}`);
    try{
        next()
    }catch(e){
        res.status(503),send("Try again")
    }
}

const app = express()
app.use(express.json())
app.use(logger)

app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})
app.get("/users",(req,res)=>{
    let {first_name,gender} = req.query
    if(first_name || gender){
        const user = users.find((user)=>user.first_name === first_name && user.gender === gender);
    res.json(user || {})
    }else{
    res.json({
        request_form:req.url,
        data:users,
    })        
    }

})

app.post("/users",(req,res)=>{
    console.log(`listen at port:`,req.body);
    users.push(req.body);
    res.json(req.body);
})

app.get("/users/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=>user.id === Number.parseInt(id));
    res.json(user)
})

app.listen(PORT,()=>{
    console.log(`listining on port ${PORT}`);
})




// app.get('/',(req,res)=>{
//     console.log("Home Page Get Request");
// })

// app.post("/",(req,res)=>{
//     console.log("req.body", req.body);
//     console.log("Post Request");
// })