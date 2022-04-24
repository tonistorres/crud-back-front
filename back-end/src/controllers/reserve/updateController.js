const { update } = require('../../services/reserve');

const updateController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { client, room, days, reservationDate, totalPrice } = req.body;
    const resultUpdate = await update({ client, room, days, reservationDate, totalPrice, id });
    return res.status(200).json(resultUpdate);
  } catch (error) {
    next(error);
  };
};

module.exports = updateController;