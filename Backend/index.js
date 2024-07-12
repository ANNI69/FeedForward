// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./src/Routes/Auth.route.js";
import foodRoutes from "./src/Routes/Food.routes.js";
import connectToDB from "./src/DB/index.js";

dotenv.config();

const app = express();
app.use(express.json());



app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);

