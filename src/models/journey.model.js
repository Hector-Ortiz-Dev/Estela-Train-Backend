import mongoose from "mongoose";

const journeySchema = new mongoose.Schema(
  {
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
    status: {
      type: String,
      required: true,
    },
    id_to_city: {
      type: String,
      required: true,
    },
    id_from_city: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Journey", journeySchema);
