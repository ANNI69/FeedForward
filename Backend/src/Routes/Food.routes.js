import express from 'express';
import FoodItem from '../Models/Food.model.js';

const router = express.Router();

// Create a new food item
router.post('/fooditems', async (req, res) => {
  try {
    const foodItem = new FoodItem(req.body);
    await foodItem.save();
    res.status(201).send(foodItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all food items
router.get('/fooditems', async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.status(200).send(foodItems);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
