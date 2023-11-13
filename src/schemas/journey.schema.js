import { z } from "zod";

export const createJourneySchema = z.object({
  origin: z.string({
    required_error: "Falta ingresar la ciudad de origen",
  }),
  destination: z.string({
    required_error: "Falta ingresar la ciudad de destino",
  }),
  departure_date: z.string({
    required_error: "Falta ingresar la fecha de salida",
  }),
  arrival_date: z.string({
    required_error: "Falta ingresar la fecha de llegada",
  }),
  train: z.number({
    required_error: "Falta ingresar el tren",
  }),
  price: z.number({
    required_error: "Falta ingresar el precio",
  }),
  })
