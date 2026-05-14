import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionString = process.env.MONGODB_URL;

    if (!connectionString) {
      throw new Error("MONGODB_URL not found");
    }

    const conn = await mongoose.connect(connectionString);

    console.log("MongoDB connected");

    return conn;
  } catch (error) {
    console.error("MongoDB connection error:");
    console.error(error);

    throw error;
  }
};

export default connectDB;