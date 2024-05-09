import mongoose from "mongoose";
import 'dotenv/config.js'

export const connectToDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected successfully")
        // console.log(conn.connections.co)
    } catch (error) {
        console.log("Database connection failed !!!")
        console.error(error)
        process.exit(1)
    }
}