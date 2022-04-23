module.exports = (sequelize, DataTypes) => {

  const Reservation = sequelize.define('Reservation', {
    client: DataTypes.STRING,
    room: DataTypes.STRING,
    days: DataTypes.INTEGER,
    reservationDate: DataTypes.DATE,
    totalPrice: DataTypes.INTEGER

});

return Reservation;

}




