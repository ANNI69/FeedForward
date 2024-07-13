// routes/auth.js
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/User.model.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();


// Register
router.post("/register", async (req, res) => {
  try {
    const {
      name,
      type,
      email,
      password,
      organizationType,
      organizationName,
      address,
      phone,
    } = req.body;

    // Check if password is provided
    if (email === "" || password === "") {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user object
    const newUser = new User({
      name,
      type,
      email,
      password: hashedPassword,
      organizationType,
      organizationName,
      address,
      phone,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Respond with the saved user
    res.status(201).json(savedUser);
  } catch (err) {
    // Log the error for debugging
    console.error(err);

    // Respond with a generic error message
    res.status(400).json({ message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Log the request body for debugging
    console.log("Request body:", req.body);

    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Respond with the token and user info
    res.json({
      token,
      user: { id: user._id, email: user.email, name: user.name, type: user.type },
    });
  } catch (err) {
    // Log the error for debugging
    console.error("Error:", err);

    // Respond with a generic error message
    res.status(400).json({ message: err.message });
  }
});

export default router;
