import mongoose from 'mongoose';

const DonationSchema = new mongoose.Schema({
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donor',
    required: true,
  },
  acceptor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Acceptor',
    required: true,
  },
  foodItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FoodItem',
    required: true,
  }],
  pickupDate: {
    type: Date,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'canceled'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Donation = mongoose.model('Donation', DonationSchema);

export default Donation;
