const routes = require('express').Router();
const reserveRoutes = require('./reserve.routes.js');

routes.use('/reservations', reserveRoutes);

module.exports = routes;