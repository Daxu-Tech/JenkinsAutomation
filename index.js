const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.get("/",(req,res)=>
{
    res.send("<h1>Welcome to nodejs with mongoDB connection demo </h1>")
})

app.get("/about",(req,res)=>
{
    res.send("<h1>Welcome to About Page </h1>")
})

app.get("/home",(req,res)=>
{
    res.send("<h1>Welcome to Home Page</h1>")
})

app.listen(3000)