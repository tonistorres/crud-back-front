const { list } = require('../../services/reserve');

const listController = async (_req, res, next) => {
  try {
    const listReserves = await list();
    return res.status(200).json(listReserves);
  } catch (error) {
    next(error);
  };
};

module.exports = listController;