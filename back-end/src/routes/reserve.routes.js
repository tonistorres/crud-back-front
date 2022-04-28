const reserveRoutes = require('express').Router();
const reserve = require('../controllers/reserve');

reserveRoutes.route('/')
.get(reserve.list)
.post(reserve.create)


reserveRoutes.route('/:id')
.get(reserve.getById)
.put(reserve.update)
.delete(reserve.remove)

module.exports = reserveRoutes;