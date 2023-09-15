import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: "Falta ingresar el nombre de usuario",
    }),
    name: z.string({
        required_error: "Falta ingresar el nombre completo",
    }),
    password: z
        .string({
            required_error: "Falta ingresar la contrasena",
        })
        .min(2, {
            message: "La contrasena debe ser de al menos 2 caracteres",
        }),
});

export const loginSchema = z.object({
    username: z.string(),
    password: z.string().min(2),
});