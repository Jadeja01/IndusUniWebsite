import mongoose from "mongoose";

const ContributionSchema = new mongoose.Schema(
  {
    uploaderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subject: {
      type: String,
      required: true,
      index: true,
    },
    documentType: {
      type: String,
      required: true,
      enum: [
        "pyqs",
        "assignment",
        "notes",
        "practicals",
        "course_file",
      ],
    },
    documentClgYear: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    documentTitle: {
      type: String,
      required: true,
      maxlength: 100,
    },
    documentYear: {
      type: String,
      required: true,
    },
    driveFileId: {
      type: String,
      required: true,
    },

    driveViewLink: {
      type: String,
      required: true,
    },

    anonymous: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected","replaced"],
      default: "pending",
      index: true,
    },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    approvedAt: Date,

    rejectionReason: String,
    tokensAwarded: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Contribution ||
  mongoose.model("Contribution", ContributionSchema);
