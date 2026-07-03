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
  // "http://localhost:5173",
  "https://booksstore-phi.vercel.app", // ❌ No trailing slash
];

// CORS
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow Postman, server-to-server requests
      if (!origin) return callback(null, true);

      console.log("Origin:", origin);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
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

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Error:", err);
  });

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});