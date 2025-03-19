import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/database.js";
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

const port = process.env.port

app.use(express.json())
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("api/message", messageRoutes);

app.listen(port, () => {
    console.log("server is running on port 5001")
    connectDB()
})