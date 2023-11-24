import PayMethod from "../models/payMethod.model.js";

export const getPayMethods = async (req, res) => {
  const payMethods = await payMethod.find();
  res.json(payMethods);
};

export const createPayMethods = async (req, res) => {
  try {
    const { card_number, month, year, cvv } = req.body;

    const newPayMethod = new PayMethod({
      card_number,
      month,
      year,
      cvv,
      id_user: req.user.id,
    });

    const savedPayMethod = await newPayMethod.save();
    res.json(savedPayMethod);
  } catch (err) {
    res.status(500).json({ message: "Something is wrong!" });
  }
};

export const getPayMethod = async (req, res) => {
  try {
    const payMethod = await PayMethod.findById(req.params.id);
    if (!payMethod) {
      return res.status(404).json({ message: "Pay method not found" });
    }
    res.json(payMethod);
  } catch (err) {
    return res.status(404).json({ message: "Pay method not found" });
  }
};

export const getPayMethodsbyUser = async (req, res) => {
  try {
    const id_user = req.params.id;
    const payMethods = await PayMethod.find({
      id_user: id_user,
      active: true
    });

    if (!payMethods) {
      return res.status(404).json({ message: "Payment methods not found" });
    }
    res.json(payMethods);
  } catch (err) {
    return res.status(404).json({ message: "Payment methods not found" });
  }
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
