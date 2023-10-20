import { z } from "zod";

export const createTicketSchema = z.object({
  passenger: z.string({
    required_error: "Falta ingresar el nombre del pasajero",
  }),
  type: z.string({
    required_error: "Falta ingresar el tipo de boleto",
  }),
  genre: z.string({
    required_error: "Falta ingresar el género del pasajero",
  }),
  ticketClass: z.string({
    required_error: "Falta ingresar la clase del boleto",
  }),
  seat: z.number({
    required_error: "Falta ingresar el asiento del pasajero",
  }),
});
