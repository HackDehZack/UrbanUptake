const { Schema, model } = require("mongoose");

const transactionSchema = new Schema({
  buyer: { type: Schema.Types.ObjectId, ref: "User", required: true },
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  transactionDate: { type: Date, default: Date.now, required: true },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "completed"],
    required: true,
  },
  amount: { type: Number, required: true, min: 0 },
});

const Transaction = model("Transaction", transactionSchema);
module.exports = Transaction;
