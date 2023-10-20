import { Router } from "express";
import { authRequired } from "../middlewares/validate.token.js";
import {
  getTickets,
  getTicket,
  createTickets,
  updateTickets,
  deleteTickets,
} from "../controllers/tickets.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTicketSchema } from "../schemas/ticket.schema.js";

const router = Router();

router.get("/tickets", authRequired, getTickets);

router.get("/tickets/:id", authRequired, getTicket);

router.post("/tickets", authRequired, validateSchema(createTicketSchema), createTickets);

router.delete("/tickets/:id", authRequired, deleteTickets);

router.put("/tickets/:id", authRequired, updateTickets);

export default router;
