import mongoose from "mongoose"
import DB_NAME from "../constants.js"

const connectToDB = async () => {
    try {
        const connectionInstance  = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(`Connected to MongoDB Successfully`);
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with an error code
    }
}

export default connectToDB;