const { list } = require('../../services/reserve');

const listController = async (req, res, next) => {
  try {
    console.log(req.headers);
    const listReserves = await list();
    return res.status(200).json(listReserves);
  } catch (error) {
    next(error);
  };
};

module.exports = listController;