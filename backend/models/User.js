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

    accessPercent: {
      type: Number,
      default: 70, // login unlock
    },
  },
  { timestamps: true }
);

export default mongoose.models.Users || mongoose.model("Users", UserSchema);
