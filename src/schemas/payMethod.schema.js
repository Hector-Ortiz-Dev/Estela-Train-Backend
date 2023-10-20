import { z } from "zod";

export const createPayMethodSchema = z.object({
  card_number: z
    .number({
      required_error: "Falta ingresar el numero de tarjeta",
    })
    .lte(9999999999999999, "El numero de tarjeta debe tener 16 digitos")
    .gte(1000000000000000, "El numero de tarjeta debe tener 16 digitos"),
  month: z
    .number({
      required_error: "Falta ingresar el mes de vencimiento",
    })
    .lte(12, "El mes debe tener 2 digitos").gte(1, "El mes debe tener 2 digitos"),
  year: z
    .number({
      required_error: "Falta ingresar el año de vencimiento",
    })
    .lte(99, "El año debe tener 2 digitos").gte(23, "El año debe tener 2 digitos"),
  cvv: z
    .number({
      required_error: "Falta ingresar el cvv",
    })
    .lte(999, "El cvv debe tener 3 digitos").gte(100, "El cvv debe tener 3 digitos"),
});
