import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["image", "thought"],
      required: true,
    },

    imageUrl: {
      type: String,
    },

    text: {
      type: String,
    },

    caption: {
      type: String,
      default: "",
    },

    userName: {
      type: String,
      required: true,
    },

    uploaderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    }
  },
  { timestamps: true }
);

export default mongoose.models.Gallery ||
  mongoose.model("Gallery", GallerySchema);
