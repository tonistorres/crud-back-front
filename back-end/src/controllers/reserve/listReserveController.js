const { list } = require('../../services/reserve');

const listReserveController = async (_req, res, next) => {
  try {
    const reservesList = await list();
    return res.status(200).json(reservesList);
  } catch (error) {
    next(error);
  };
};

module.exports = listReserveController;