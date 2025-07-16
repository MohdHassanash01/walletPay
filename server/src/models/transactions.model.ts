import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  amount: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
  },
  type: {
    type: String,
    enum: ["credit", "debit"], // money in or out
    required: true
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
}, {
  timestamps: true
});

export const transactionModel = mongoose.model("Transaction", transactionSchema);
