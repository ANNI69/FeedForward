import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/feedforward");
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log("Error in connecting to MongoDB : ", e);
  }
};
