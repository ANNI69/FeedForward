// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDB from "./src/DB/index.js";
import authRoutes from "./src/Routes/Auth.route.js"; // Assuming your routes are in the src folder
import foodRoutes from "./src/Routes/Food.routes.js"; // Assuming your routes are in the src folder

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);

// Database connection and server start
connectToDB()
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.log("Error: ", error.message);
  });
