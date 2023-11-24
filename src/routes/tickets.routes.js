import { Router } from "express";
import { authRequired } from "../middlewares/validate.token.js";
import {
  getTickets,
  getTicket,
  createTicket,
  updateTicket,
  deleteTicket,
  getTicketbyIdPayment,
} from "../controllers/tickets.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTicketSchema } from "../schemas/ticket.schema.js";

const router = Router();

router.get("/tickets", authRequired, getTickets);

router.get("/ticket/:id", authRequired, getTicket);

router.get("/ticketsIdPayment/:id", authRequired, getTicketbyIdPayment);

router.post("/ticket", authRequired, validateSchema(createTicketSchema), createTicket);

router.delete("/ticket/:id", authRequired, deleteTicket);

router.put("/ticket/:id", authRequired, updateTicket);

export default router;
