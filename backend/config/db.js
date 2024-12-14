import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
    }
    catch (error){
        console.log('Error connecting to MongoDB:', error);
        process.exit(1); // 1 means a failure, 0 means a success 
    };
};