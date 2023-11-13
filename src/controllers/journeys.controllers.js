import Journey from "../models/journey.model.js";

export const getJourneys = async (req, res) => {
  try {
    const journeys = await Journey.find();
    res.json(journeys);
  } catch (err) {
    res.status(500).json({ message: "Something is wrong!" });
  }
};

export const createJourneys = async (req, res) => {
  try {
    const {
      origin,
      destination,
      departure_date,
      arrival_date,
      train,
      price,
      seats
    } = req.body;

    const newJourney = new Journey({
      origin,
      destination,
      departure_date,
      arrival_date,
      train,
      price,
      seats
    });

    const savedJourney = await newJourney.save();
    res.json(savedJourney);
  } catch (err) {
    res.status(500).json({ message: "Something is wrong!" });
  }
};

export const getJourney = async (req, res) => {
  try {
    const journey = await Journey.findById(req.params.id);
    if (!journey) {
      return res.status(404).json({ message: "Journey not found" });
    }
    res.json(journey);
  } catch (err) {
    res.status(404).json({ message: "Journey not found" });
  }
};

export const deleteJourneys = async (req, res) => {
  try {
    const journey = await Journey.findByIdAndDelete(req.params.id);
    if (!journey) {
      return res.status(404).json({ message: "Journey not found" });
    }
    return res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: "Something is wrong!" });
  }
};

export const updateJourneys = async (req, res) => {
  try {
    const journey = await Journey.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!journey) {
      return res.status(404).json({ message: "Journey not found" });
    }
    res.json(journey);
  } catch (err) {
    res.status(500).json({ message: "Something is wrong!" });
  }
};
