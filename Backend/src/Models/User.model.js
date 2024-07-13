// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, enum: ["Donor", "Acceptor", "admin"], required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    organizationType: {
      type: String,
      enum: ["Donor", "Acceptor"],
      required: true,
    },
    organizationName: { type: String, required: true },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
    },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
