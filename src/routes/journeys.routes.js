import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getJourneys,
  getJourney,
  createJourneys,
  updateJourneys,
  deleteJourneys,
} from "../controllers/journeys.controllers.js";

const router = Router();

router.get("/journeys", authRequired, getJourneys);

router.get("/journeys/:id", authRequired, getJourney);

router.post("/journeys", authRequired, createJourneys);

router.delete("/journeys/:id", authRequired, deleteJourneys);

router.put("/journeys/:id", authRequired, updateJourneys);

export default router;
