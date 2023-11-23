import { z } from "zod";

export const createPaymentSchema = z.object({
  id_user: z.string({
    required_error: "Id del usuario no obtenido",
  }),
  id_journey: z.string({
    required_error: "Id del viaje no obtenido",
  }),
  paymentMethod: z.string({
    required_error: "Metodo de pago no encontrado",
  }),
  total: z.number({
    required_error: "Precio total no encontrado",
  }),
});
