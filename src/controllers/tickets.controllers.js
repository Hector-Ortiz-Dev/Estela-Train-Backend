import Ticket from "../models/ticket.model.js";

export const getTickets = async (req, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
};

export const createTickets = async (req, res) => {
  const {
    passenger,
    type,
    genre,
    ticketClass,
    seat
  } = req.body;

  const newTicket = new Ticket({
    passenger,
    type,
    genre,
    ticketClass,
    seat
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

export const deleteTickets = async (req, res) => {
  const ticket = await Ticket.findByIdAndDelete(req.params.id);
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }
  return res.sendStatus(204);
};

export const updateTickets = async (req, res) => {
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!ticket) {
    return res.status(404).json({ message: "Ticket not found" });
  }
  res.json(ticket);
};
