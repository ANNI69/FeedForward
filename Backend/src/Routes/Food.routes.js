// routes/food.js
import express from "express";
import Food from "../Models/Food.model.js";
import auth from "../Middlewares/auth.js";

const router = express.Router();

// Donate Food
router.post("/donate", auth, async (req, res) => {
  try {
    const {
      foodType,
      foodQuantity,
      foodContaining,
      expectedFoodExpiry,
      additionalDetails,
    } = req.body;
    const newFood = new Food({
      donor: req.user.id,
      foodType,
      foodQuantity,
      foodContaining,
      expectedFoodExpiry,
      additionalDetails,
    });

    const savedFood = await newFood.save();
    res.status(201).json(savedFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
