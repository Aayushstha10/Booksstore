import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/books.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(URI);
      console.log("MongoDB connected successfully");
    }
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

connectDB();


app.get("/", (req, res) => {
  res.send("BookStore API is running...");
});

app.use("/book", bookRoute);
app.use("/user", userRoute);


export default app;