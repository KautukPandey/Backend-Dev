import User from "../models/User";
import bcrypt from "bcryptjs";
import crypto from "crypto"
export const register = async(req,res)=>{
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({message: "Fields cannot be empty"})
        }
        const existingUser = await User.findOne(email)
        if(existingUser){
            return res.status(400).json({message:"User already exists"})
        }
        const hash = await bcrypt.hash(password,10);

        const token = await crypto.getRandomValues(32).toString();

        const user = await User.create({
            email,
            password: hash,
            verificationToken: token
        })

        return res.status(200).json({message:"User registered"})

    } catch (error) {
        console.log(error);
        
    }
}

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({message: "Fields cannot be empty"})
        }
        const user = await User.findOne(email)
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Email or Password Wrong"})
        }
         

    } catch (error) {
        
    }
}