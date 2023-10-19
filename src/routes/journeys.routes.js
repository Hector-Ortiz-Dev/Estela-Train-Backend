import { Router } from "express";
import { authRequired } from "../middlewares/validate.token.js";
import {
  getJourneys,
  getJourney,
  createJourneys,
  updateJourneys,
  deleteJourneys,
} from "../controllers/journeys.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createJourneySchema } from "../schemas/journey.schema.js";

const router = Router();

router.get("/journeys", getJourneys);

router.get("/journeys/:id", getJourney);

router.post("/journeys", validateSchema(createJourneySchema), createJourneys);

router.delete("/journeys/:id", deleteJourneys);

router.put("/journeys/:id", updateJourneys);

export default router;
