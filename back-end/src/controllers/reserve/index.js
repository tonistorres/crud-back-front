const create = require('./createController');
const remove = require('./deleteController');
const getById = require('./getByIdController');
const list = require('./listController');
const update = require('./updateController');


module.exports ={
    create,
    remove,
    getById,
    list,
    update
}