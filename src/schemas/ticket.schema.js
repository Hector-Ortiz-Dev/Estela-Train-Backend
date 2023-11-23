import { z } from "zod";

export const createTicketSchema = z.object({
  passenger: z.string({
    required_error: "Falta ingresar el nombre del pasajero",
  }),
  type: z.string({
    required_error: "Falta ingresar el tipo de pasajero",
  }),
  genre: z.string({
    required_error: "Falta ingresar el género del pasajero",
  }),
  origin: z.string({
    required_error: "Falta ingresar la ciudad origen",
  }),
  destination: z.string({
    required_error: "Falta ingresar la ciudad destino",
  }),
  train: z.number({
    required_error: "Falta ingresar el numero de tren",
  }),
  date: z.string({
    required_error: "Falta ingresar la fecha de salida",
  }),
  total: z.number({
    required_error: "Falta ingresar el precio total",
  }),
  id_journey: z.string({
    required_error: "Falta el id del viaje",
  }),
  id_payment: z.string({
    required_error: "Falta el id del pago",
  }),
});
