const { Reservation } = require('../../database/models');

const createService = async ({ client, room, days, reservationDate, totalPrice }) => {
    const resultReserve = await Reservation.create({ client, room, days, reservationDate, totalPrice });
    return resultReserve;
};

module.exports = createService;