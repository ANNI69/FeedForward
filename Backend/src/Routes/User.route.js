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

router.get("/dashboard", auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const userType = req.user.type;

    let userDashboardData;

    if (userType === "Donor") {
      const donor = await Donor.findById(userId).select("-password");
      if (!donor) {
        return res.status(404).json({ msg: "Donor not found" });
      }
      userDashboardData = {
        name: donor.name,
        organizationName: donor.organizationName,
        donations: [], // Replace with actual donation data
        // Add other relevant donor dashboard data
      };
    } else if (userType === "Acceptor") {
      const acceptor = await Acceptor.findById(userId).select("-password");
      if (!acceptor) {
        return res.status(404).json({ msg: "Acceptor not found" });
      }
      userDashboardData = {
        name: acceptor.name,
        organizationName: acceptor.organizationName,
        acceptedDonations: [], // Replace with actual accepted donations data
        // Add other relevant acceptor dashboard data
      };
    } else {
      return res.status(400).json({ msg: "Invalid user type" });
    }

    res.json(userDashboardData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});


export default router;