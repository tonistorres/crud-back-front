const { Reservation } = require('../../database/models');

const listService = async () => {
  const resultLit = await Reservation.findAll();
  return resultLit;
};
 
module.exports = listService; 