import { Router } from "express";
import { authRequired } from "../middlewares/validate.token.js";
import {
    getPayMethods,
    getPayMethod,
    createPayMethods,
    updatePayMethods,
    deletePayMethods,
    getPayMethodsbyUser,
} from "../controllers/payMethods.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPayMethodSchema } from "../schemas/payMethod.schema.js";

const router = Router();

router.get("/payMethods", authRequired, getPayMethods);

router.get("/payMethod/:id", authRequired, getPayMethod);

router.get("/payMethods/:id", authRequired, getPayMethodsbyUser);

router.post(
  "/payMethod",
  authRequired,
  validateSchema(createPayMethodSchema),
  createPayMethods
);

router.delete("/payMethod/:id", authRequired, deletePayMethods);

router.put("/payMethod/:id", authRequired, updatePayMethods);

export default router;
