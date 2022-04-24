const { Reservation } = require('../../database/models');

const deleteService = async (id) => {
  await Reservation.destroy({ where: { id }});
};

module.exports = deleteService;