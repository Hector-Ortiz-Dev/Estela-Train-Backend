import City from "../models/cities.model.js";

//Obtener todas las ciudades
export const getCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: "Something is wrong!" });
  }
};

//Crear una ciudad
export const createCity = async (req, res) => {
  try {
    const { name, abbreviation } = req.body;

    const newCity = new City({
      name,
      abbreviation
    });

    const savedCity = await newCity.save();
    res.json(savedCity);
  } catch (err) {
    res.status(500).json({ message: "Something is wrong!" });
  }
};

//Obtener una ciudad
export const getCity = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }
    res.json(city);
  } catch (err) {
    res.status(404).json({ message: "City not found" });
  }
};

//Eliminar una ciudad
export const deleteCity = async (req, res) => {
  try {
    const city = await City.findByIdAndDelete(req.params.id);
    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }
    return res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: "Something is wrong!" });
  }
};

//Actualizar una ciudad
export const updateCity = async (req, res) => {
  try {
    const { name, abbreviation } = req.body;

    const city = await City.findByIdAndUpdate(
      req.params.id,
      {
        name,
        abbreviation
      },
      { new: true }
    );

    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    res.json(city);
  } catch (err) {
    res.status(500).json({ message: "Something is wrong!" });
  }
};
