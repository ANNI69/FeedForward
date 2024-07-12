import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  foodType: { type: String, required: true },
  foodQuantity: { type: Number, required: true },
  foodContaining: { type: String, required: true },
  expectedFoodExpiry: { type: Date, required: true },
  additionalDetails: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Food = mongoose.model('Food', foodSchema);

export default Food;
