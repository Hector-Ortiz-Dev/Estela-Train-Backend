import Journey from "../models/journey.model.js";

export const getJourneys = async (req, res) => {
  const journeys = await Journey.find();
  res.json(journeys);
};

export const createJourneys = async (req, res) => {
  const {
    departure_date,
    arrival_date,
    train,
    status,
    id_to_city,
    id_from_city,
  } = req.body;

  const newJourney = new Journey({
    departure_date,
    arrival_date,
    train,
    status,
    id_to_city,
    id_from_city,
  });

  const savedJourney = await newJourney.save();
  res.json(savedJourney);
};

export const getJourney = async (req, res) => {
  const journey = await Journey.findById(req.params.id);
  if (!journey) {
    return res.status(404).json({ message: "Journey not found" });
  }
  res.json(journey);
};

export const deleteJourneys = async (req, res) => {
  const journey = await Journey.findByIdAndDelete(req.params.id);
  if (!journey) {
    return res.status(404).json({ message: "Journey not found" });
  }
  return res.sendStatus(204);
};

export const updateJourneys = async (req, res) => {
  const journey = await Journey.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!journey) {
    return res.status(404).json({ message: "Journey not found" });
  }
  res.json(journey);
};
