const { create } = require('../../services/reserve');

const createReserveController = async (req, res, next) => {
 try {
      const { client, room, days, reservationDate, totalPrice } = req.body;
      const resultReserve = await create({ client, room, days, reservationDate, totalPrice });
      return res.status(201).json(resultReserve);
  } catch (error) {
    next(error);
  }
};