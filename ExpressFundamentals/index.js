const express = require('express')
const app = expresss()

const PORT = 8000

const students= [
    {id:1,name:"Raj",branch: "CSE"},
    {id:2,name:"Raj1",branch: "ECE"},
    {id:3,name:"Raj2",branch: "IT"}]

app.get('/',(req,res)=>{
    res.send("Welcome to Home Page")
})

app.get('/students',(req,res)=>{
    res.json(students)
})

app.get('/students/:id',(req,res)=>{
    res.send("")
})


app.get('/students/search',(req,res)=>{
    const searchQuery = req.query;
    console.log(req.query);
    
})
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
    
})