import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/User.model.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import auth from "../Middlewares/auth.js";

dotenv.config();

const router = express.Router();

// Get List Of ALl Users
router.get("/getUser", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

// Get the details of a specific user
router.get("/getUser/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

router.get("/dashboard/:userId", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});


export default router;