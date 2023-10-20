import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { username, name, password } = req.body;

  try {
    const userFound = await User.findOne({ username });
    if (userFound)
      return res
        .status(400)
        .json({ message: ["El nombre de usuario ya está en uso"] });

    const passwordHash = await bcryptjs.hash(password, 10);

    const newUser = new User({
      username,
      name,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token, {
      //sameSite: "none",
      //secure: true,
      //httpOnly: false,
    });
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      name: userSaved.name,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userFound = await User.findOne({ username });

    if (!userFound)
      return res
        .status(400)
        .json({ message: ["El nombre de usuario no existe"] });

    const isMatch = await bcryptjs.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).json({ message: ["La contrasena es incorrecta"] });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      username: userFound.username,
      name: userFound.name,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound)
    return res.status(400).json({ message: "Usuario no encontrado" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    name: userFound.name,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(400).json({ message: "No hay token" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(400).json({ message: "Token no valido" });

    const userFound = await User.findById(user.id);
    if (!userFound)
      return res.status(401).json({ message: "Usuario no encontrado" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      name: userFound.name,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  });
};
