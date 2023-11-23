import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    id_journey: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Payment", paymentSchema);