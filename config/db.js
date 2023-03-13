import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongodb =  process.env.mongodb;

const db = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to mongo");
        // return mongoose.connection;
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

export default db;