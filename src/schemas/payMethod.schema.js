import { z } from "zod";

export const createPayMethodSchema = z.object({
  card_number: z
    .string({
      required_error: "Falta ingresar el numero de tarjeta",
    }),
  month: z
    .string({
      required_error: "Falta ingresar el mes de vencimiento",
    }),
  year: z
    .string({
      required_error: "Falta ingresar el año de vencimiento",
    }),
  cvv: z
    .string({
      required_error: "Falta ingresar el cvv",
    })
});
