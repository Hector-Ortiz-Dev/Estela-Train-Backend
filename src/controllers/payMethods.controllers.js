import PayMethod from "../models/payMethod.model.js";

export const getPayMethods = async (req, res) => {
  const payMethods = await payMethod.find();
  res.json(payMethods);
};

export const createPayMethods = async (req, res) => {
  const { card_number, month, year, cvv } = req.body;

  const newPayMethod = new PayMethod({
    card_number,
    month,
    year,
    cvv,
    user: req.user.id,
  });

  const savedPayMethod = await newPayMethod.save();
  res.json(savedPayMethod);
};

export const getPayMethod = async (req, res) => {
  const payMethod = await PayMethod.findById(req.params.id);
  if (!payMethod) {
    return res.status(404).json({ message: "Pay method not found" });
  }
  res.json(payMethod);
};

export const deletePayMethods = async (req, res) => {
  const payMethod = await PayMethod.findByIdAndDelete(req.params.id);
  if (!payMethod) {
    return res.status(404).json({ message: "Pay method not found" });
  }
  return res.sendStatus(204);
};

export const updatePayMethods = async (req, res) => {
  const payMethod = await PayMethod.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!payMethod) {
    return res.status(404).json({ message: "Pay method not found" });
  }
  res.json(payMethod);
};
