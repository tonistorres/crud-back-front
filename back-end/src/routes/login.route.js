const loginRoutes = require('express').Router();
const login = require('../controllers/login');

loginRoutes.route('/')
.post(login.create)

module.exports = loginRoutes;