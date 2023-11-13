import mongoose from "mongoose";

const journeySchema = new mongoose.Schema(
  {
    origin: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    departure_date: {
      type: Date,
      required: true,
    },
    arrival_date: {
      type: Date,
      required: true,
    },
    train: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    seats: {
      type: Number,
      default: 40,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Journey", journeySchema);
