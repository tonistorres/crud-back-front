const routes = require('express').Router();
const reserveRoutes = require('./reserve.routes.js');
const loginRoutes = require('./login.route');

routes.use('/reservations', reserveRoutes);
routes.use('/logins', loginRoutes);

module.exports = routes;