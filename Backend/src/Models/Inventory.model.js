import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema({
  location: {
    type: String,
    required: true, // e.g., donor, acceptor, storage facility
  },
  foodItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FoodItem',
    required: true,
  }],
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Inventory = mongoose.model('Inventory', InventorySchema);

export default Inventory;
