import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/books.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

// Allowed frontend URLs
const allowedOrigins = [
  "http://localhost:5173/",
  "https://booksstore-h6rh.vercel.app", 
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests from Postman or server-side requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS policy: Origin not allowed"));
    },
    credentials: true,
  }),
);

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "BookStore Backend is Running 🚀",
  });
});

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// 404 Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error(err);
  });
export default app;
