
  
const { Reservation } = require('../../database/models');
const notFound = require('../../utils/notFound');

const getByIdService = async (id) => {
  const resultReserve = await Reservation.findOne({ where: { id } });
  if(!resultReserve) throw notFound('reservation not found');
  return resultReserve;
};

module.exports = getByIdService;