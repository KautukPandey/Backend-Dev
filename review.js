const express = require('express')

const app = express()

app.get('/login',async (req,res)=>{
    const {username,password} = req.body
    if(!username || !password){
        return res.status(400).json({message: "Username or Password wrong"})
    }
    const user = await User.findOne({username,password})
    if(!user){
        return res.status(400).json({message: "User doesn't exist"})
    }
    return res.status(200).json({message:"User found"},user)
})

app.get('/signup',async (req,res)=>{
    const {username,password,email} = req.body
    if(!username || !password || !email){
        return res.status(400).json({message:"Fields cannot be empty"})
    }
    const user = await User.findOne(username)
    if(user){
        return res.status(400).json({message:"User already exists"})
    }
    const user1 = await User.create()
})