// models/Profile.js
import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    // Academic Identity
    branch: String,
    course: String,
    year: String,
    semester: String,

    // Preferences
    goal: String,

    // Visibility
    visibility: {
      type: String,
      default: "private",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Profiles || mongoose.model("Profiles", ProfileSchema);
