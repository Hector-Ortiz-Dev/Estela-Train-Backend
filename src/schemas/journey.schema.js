import { z } from "zod";

export const createJourneySchema = z.object({
  departure_date: z
    .string({
      required_error: "Falta ingresar la fecha de salida",
    })
    .datetime(),
  arrival_date: z
    .string({
      required_error: "Falta ingresar la fecha de llegada",
    })
    .datetime(),
  train: z.number({
    required_error: "Falta ingresar el numero de tren",
  }),
  status: z.string({
    required_error: "Falta ingresar el estado",
  }),
  id_to_city: z.string({
    required_error: "Falta ingresar el id de la ciudad de destino",
  }),
  id_from_city: z.string({
    required_error: "Falta ingresar el id de la ciudad de origen",
  }),
});
