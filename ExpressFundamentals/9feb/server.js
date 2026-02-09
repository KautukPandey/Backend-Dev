const { log } = require('console')
const express = require('express')
const app = express()
const fs = require('fs')
const PORT = 3000
``
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})
const fileAuthMiddleware = (req,res,next)=>{
    console.log("I am checking");
    return res.send("auth failed")
}
app.use((req,res,next)=>{
    const token = req.headers("authorization")
})

const readStudentsFromFile = async(req,res)=>{
    const data = await fs.readFile('./students.json','utf-8')
    return JSON.parse(data || "[]")
}

const writeStudentsToFile = async(records)=>{
    await fs.writeFile('./students.json',JSON.stringify(records,null,2))
}

const authMiddware = (req,res,next)=>{
    console.log("");
    
}

app.get('/students',fileAuthMiddleware,async(req,res)=>{
    const students = await readStudentsFromFile()
    return res.status(200).json(students)
})