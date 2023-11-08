import { z } from "zod";

export const createCitySchema = z.object({
  name: z
    .string({
      required_error: "Falta ingresar el nombre",
    })
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(255, "El nombre debe tener como máximo 255 caracteres"),
  abbreviation: z
    .string({
      required_error: "Falta ingresar la abreviatura",
    })
    .min(2, "La abreviatura debe tener al menos 2 caracteres")
    .max(4, "La abreviatura debe tener como máximo 4 caracteres"),
});
