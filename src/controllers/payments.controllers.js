import Payment from "../models/payment.model.js";

export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: "Something is wrong!" });
  }
};

export const createPayment = async (req, res) => {
  try {
    console.log("Entering create payment");
    const { id_user, id_journey, paymentMethod, total } = req.body;

    const newPayment = new Payment({
      id_user,
      id_journey,
      paymentMethod,
      total,
    });

    const savedPayment = await newPayment.save();
    res.json(savedPayment);
  } catch (err) {
    res.status(500).json({ message: "Something is wrong!" });
  }
};

export const getPayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.json(payment);
  } catch (err) {
    res.status(404).json({ message: "Payment not found" });
  }
};

export const updatePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.json(payment);
  } catch (err) {
    res.status(500).json({ message: "Something is wrong!" });
  }
};

export const deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    return res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: "Something is wrong!" });
  }
};