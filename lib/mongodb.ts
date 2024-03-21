import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shivamnarkar16:Shivam1111@cluster0.0ulcwjv.mongodb.net/feedforward?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log("Error in connecting to MongoDB : ", e);
  }
};
