import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config()
const connectDB = async ()=>{
    return await mongoose.connect(process.env.DB_LOCAL)
}

export default connectDB