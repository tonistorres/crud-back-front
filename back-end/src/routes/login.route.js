const loginRoutes = require('express').Router();
const login = require('../controllers/login');

loginRoutes.route('/')
.post(login.create)
loginRoutes.route('/authentication')
.post(login.authentication)

module.exports = loginRoutes;