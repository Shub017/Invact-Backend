import mongoose from "mongoose";

async function connectToMongoDB() {
    try {
        const url = process.env.URL;
      // Connect to the MongoDB server
        await mongoose.connect(url);
        console.log('Connected successfully to MongoDB');    
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}               

export default connectToMongoDB;