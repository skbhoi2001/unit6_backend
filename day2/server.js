const express = require("express")
const users = require("./user.json")
const PORT = 8080

const app = express()
app.use(express.json())

//get / => this will return simple text "Welcome to Home page"
app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

//get /users => this will return a list of all users
app.get("/users",(req,res)=>{
    res.json(users)
})
//get a specefic user
app.get("/users/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find((user)=>user.id === Number.parseInt(id))
    res.json(user)
})

// app.delete("/users/:id",(req,res)=>{
//     const {id} = req.params;
//     const del = users.filter((user)=>user.id !== Number.parseInt(id))
//     res.json(users)
// })

//post /users => you will pass the below json as request body and add that to the users collection
app.post("/users",(req,res)=>{
    users.push(req.body)
    res.json(req.body)
})


app.listen(PORT,()=>{
    console.log(`listining to port ${PORT}`);
})