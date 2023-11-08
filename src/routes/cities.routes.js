import { Router } from "express";
import {
  getCities,
  getCity,
  createCity,
  updateCity,
  deleteCity,
} from "../controllers/cities.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createCitySchema } from "../schemas/cities.schema.js";

const router = Router();

router.get("/cities", getCities);

router.get("/cities/:id", getCity);

router.post("/cities", validateSchema(createCitySchema), createCity);

router.delete("/cities/:id", deleteCity);

router.put("/cities/:id", updateCity);

export default router;
