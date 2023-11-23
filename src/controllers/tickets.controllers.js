import Ticket from "../models/ticket.model.js";
import mongoose from "mongoose";

export const getTickets = async (req, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
};

export const createTicket = async (req, res) => {
  const {
    passenger,
    type,
    genre,
    origin,
    destination,
    train,
    date,
    total,
    id_journey,
    id_payment
  } = req.body;

  const newTicket = new Ticket({
    passenger,
    type,
    genre,
    origin,
    destination,
    train,
    date,
    total,
    id_journey,
    id_payment
  });

  const savedTicket = await newTicket.save();
  res.json(savedTicket);
};

export const getTicket = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }
  res.json(ticket);
};

export const deleteTicket = async (req, res) => {
  const ticket = await Ticket.findByIdAndDelete(req.params.id);
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }
  return res.sendStatus(204);
};

export const updateTicket = async (req, res) => {
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }
  res.json(ticket);
};
