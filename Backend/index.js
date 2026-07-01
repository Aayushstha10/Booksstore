import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/books.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

// CORS
const allowedOrigins = [
  "http://localhost:5173",
  "https://booksstore-kappa.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "BookStore Backend is Running 🚀",
  });
});

// MongoDB Connection
const URI = process.env.MONGODB_URI;

mongoose
  .connect(URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Error:", err);
  });

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// 404 Route
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Local Development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 4001;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;