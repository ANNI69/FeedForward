import mongoose from 'mongoose';

const FoodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true, // e.g., kg, liters, pieces
  },
  isEdible: {
    type: Boolean,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true, // e.g., perishable, non-perishable
  },
  storageCondition: {
    type: String,
    required: true, // e.g., refrigerated, frozen, room temperature
  },
  source: {
    type: String,
    required: true, // e.g., hotel, caterer, event
  },
  donatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donor',
    required: true,
  },
  status: {
    type: String,
    enum: ['available', 'donated', 'expired', 'disposed'],
    default: 'available',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},{timestamps: true});

const FoodItem = mongoose.model('FoodItem', FoodItemSchema);

export default FoodItem;
