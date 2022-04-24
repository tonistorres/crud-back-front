const { Reservation } = require('../../database/models');
const notFound = require('../../utils/notFound');

const updateService = async ({ client, room, days, reservationDate, totalPrice, id }) => {

  const reserve = await Reservation.findOne({ where: { id } });

  if(!reserve) throw notFound('reservation not found');

  reserve.client = client;
  reserve.room = room;
  reserve.days = days;
  reserve.reservationDate = reservationDate;
  reserve.totalPrice = totalPrice;

  await reserve.save();
    return reserve;
};

module.exports = updateService;