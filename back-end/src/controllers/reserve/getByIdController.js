const { getById } = require('../../services/reserve');

const getByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const resultReserve = await getById(id);
    return res.status(200).json(resultReserve);
  } catch (error) {
    next(error);
  };
};

module.exports = getByIdController;