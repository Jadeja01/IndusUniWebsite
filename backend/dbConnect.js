import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connectionString = process.env.MONGODB_URL || 'mongodb://localhost:27017/IndusUniWeb';
    const conn = await mongoose.connect(connectionString);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;