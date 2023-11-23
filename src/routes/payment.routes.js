import { Router } from "express";
import {
    getPayments,
    createPayment,
    getPayment,
    updatePayment,
    deletePayment
} from "../controllers/payments.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPaymentSchema } from "../schemas/payment.schema.js";

const router = Router();

router.get("/payments", getPayments);

router.get("/payment/:id", getPayment);

router.post("/payment", validateSchema(createPaymentSchema), createPayment);

router.put("/payment/:id", updatePayment);

router.delete("/payment/:id", deletePayment);

export default router;