// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    image: String,

    provider: {
      type: String,
      default: "google",
    },
    profileCompleted: {
      type: Boolean,
      default: false,
    },
    role :{
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    accessPercent: {
      type: Number,
      default: 70, 
    },
    tokens: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
