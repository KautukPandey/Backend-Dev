import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGOURI)
    } catch (error) {
        console.log(error);
        
    }
}

