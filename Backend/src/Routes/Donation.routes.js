import express from 'express';
import Donation from '../Models/Donaton.model.js';

const router = express.Router();

// Create a new donation
router.post('/donations', async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).send(donation);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all donations
router.get('/donations', async (req, res) => {
  try {
    const donations = await Donation.find().populate('donor').populate('acceptor').populate('foodItems');
    res.status(200).send(donations);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
