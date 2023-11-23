import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    passenger: {
      type: String,
      required: true,
    }, 
    type: { 
      type: String,
      required: true,
    },
    genre: { 
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    destination: { 
      type: String,
      required: true,
    },
    train: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    id_journey: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    id_payment: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Ticket", ticketSchema);
