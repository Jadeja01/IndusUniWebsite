import mongoose from "mongoose";

const TokenLedgerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    source: {
      type: String,
      enum: ["contribution"],
      required: true,
    },

    referenceId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    tokens: {
      type: Number,
      required: true,
    },

    balanceAfter: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.TokenLedger ||
  mongoose.model("TokenLedger", TokenLedgerSchema);
