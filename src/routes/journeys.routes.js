import { Router } from "express";
import {
  getJourneys,
  getJourney,
  getJourneysByOriginDestinationDate,
  createJourneys,
  updateJourneys,
  deleteJourneys,
} from "../controllers/journeys.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createJourneySchema } from "../schemas/journey.schema.js";

const router = Router();

router.get("/journeys", getJourneys);

router.get("/journeys/:id", getJourney);

router.get(
  "/journeys-odd/:origin/:destination/:date",
  getJourneysByOriginDestinationDate
);

router.post("/journeys", validateSchema(createJourneySchema), createJourneys);

router.delete("/journeys/:id", deleteJourneys);

router.put("/journeys/:id", updateJourneys);

export default router;
