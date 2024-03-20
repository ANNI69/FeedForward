import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    status: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    estDate: { type: Date, required: true },
  },
  { timestamps: true }
);

export const User = models.User || mongoose.model("User", userSchema);
