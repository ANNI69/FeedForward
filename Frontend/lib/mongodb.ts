import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://codebyanii:codebyanii@cluster0.jzioxnh.mongodb.net"
    );
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log("Error in connecting to MongoDB : ", e);
  }
};
