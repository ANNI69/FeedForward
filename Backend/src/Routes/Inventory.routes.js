import express from 'express';
import Inventory from '../Models/Inventory.model.js';

const router = express.Router();

// Update inventory
router.post('/inventory', async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    await inventory.save();
    res.status(201).send(inventory);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get inventory
router.get('/inventory', async (req, res) => {
  try {
    const inventory = await Inventory.find().populate('foodItems');
    res.status(200).send(inventory);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
