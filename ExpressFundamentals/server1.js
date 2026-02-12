const express = require('express')
const app = express()
const PORT = 3000
const { log } = require('console')
const fs = require('fs')

app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")

// const students = [
//     {id:1,name:"Raj",branch:"CSE"},
//     {id:2,name:"Raj",branch:"EC"},
//     {id:3,name:"Raj",branch:"CIVIL"},
// ]
const readStudentsFromFile = async(req,res)=>{
    const data = await fs.readFile('./students.json','utf-8')
    return JSON.parse(data || "[]")
}

const writeStudentsToFile = async(records)=>{
    await fs.writeFile('./students.json',JSON.stringify(records,null,2))
}

const studentData = await readStudentsFromFile()
app.get('/',(req,res)=>{
    res.render("form",{allStudents: studentData})
})

app.post('/register',(req,res)=>{
    console.log("Form data: ",req.body);
    res.send("registered")
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
    
})
