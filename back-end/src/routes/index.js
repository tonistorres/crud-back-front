const routes = require('express').Router();
const reserveRoutes = require('./reserve.routes.js');
const loginRoutes = require('./login.route');
const authorization = require('../middlewares/middlAuthorization');

routes.use('/reservations',authorization ,reserveRoutes);
routes.use('/logins', loginRoutes);

module.exports = routes;