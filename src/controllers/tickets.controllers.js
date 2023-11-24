import Ticket from "../models/ticket.model.js";

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

export const getTicketbyIdPayment = async (req, res) => {
  try {
    console.log(">> getTicketbyIdPayment <<");
    const id_payment = req.params.id;

    const tickets = await Ticket.find({
      id_payment: id_payment
    });

    if(!tickets) {
      return res.status(404).json({ message: "Tickets not found!" });
    }
    res.json(tickets);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Tickets not found!" });
  }
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
