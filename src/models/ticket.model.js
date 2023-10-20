import mongoose from "mongoose";
import { object } from "zod";

const ticketSchema = new mongoose.Schema(
  {
    passenger: { //Nombre completo del pasajero
      type: String,
      required: true,
    }, 
    type: { //Tipo de boleto (adulto, niño, adulto mayor)
      type: String,
      required: true,
    },
    genre: { //Género del pasajero
      type: String,
      required: true,
    },
    ticketClass: { //Clase del boleto (económico, ejecutivo)
      type: String,
      required: true,
    },
    seat: { //Asiento del pasajero
      type: Number,
      required: true,
    },
    id_journey: { //Id del viaje
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
    id_purchase: { //Id de la compra
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Ticket", ticketSchema);
