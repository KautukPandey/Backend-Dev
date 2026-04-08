import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import authRouter from "./src/routes/auth.routes.js";
dotenv.config();

const app = express()
connectDB()
app.use("/auth",authRouter)
const PORT=8000

app.listen(PORT,()=>{
    console.log(`Server running ${PORT}`);
    
})