import { Router } from "express";
import { authRequired } from "../middlewares/validate.token.js";
import {
    getPayMethods,
    getPayMethod,
    createPayMethods,
    updatePayMethods,
    deletePayMethods,
} from "../controllers/payMethods.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPayMethodSchema } from "../schemas/payMethod.schema.js";

const router = Router();

router.get("/payMethods", authRequired, getPayMethods);

router.get("/payMethods/:id", authRequired, getPayMethod);

router.post(
  "/payMethods",
  authRequired,
  validateSchema(createPayMethodSchema),
  createPayMethods
);

router.delete("/payMethods/:id", authRequired, deletePayMethods);

router.put("/payMethods/:id", authRequired, updatePayMethods);

export default router;
