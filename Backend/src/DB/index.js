import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectToDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONG_URI + "/" + process.env.DB_NAME}`
    );
    console.log(`Connected to ${DB_NAME}`);
    console.log(`Connection Instance: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default connectToDB;
