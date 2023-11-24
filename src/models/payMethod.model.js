import mongoose from "mongoose";

const payMethodSchema = new mongoose.Schema(
  {
    card_number: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true
    },
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("PayMethod", payMethodSchema);
