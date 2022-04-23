const create = require('./createReserController.js');
const remove = require('./deleteReserveController.js');
const get = require('./getReserveController.js');
const list = require('./listReserveController.js');
const update = require('./updateReserveController.js');


module.exports ={
    create,
    remove,
    get,
    list,
    update
}