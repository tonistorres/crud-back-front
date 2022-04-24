const create = require('./createService.js');
const remove = require('./deleteService.js');
const getById = require('./getByIdService.js');
const list = require('./listService.js');
const update = require('./updateService.js');

module.exports = {
  create,
  remove,
  getById,
  list,
  update
};