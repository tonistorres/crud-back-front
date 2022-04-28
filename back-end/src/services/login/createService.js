const { Login } = require('../../database/models');

const createService = async ({user, email, password, address, city }) => {
    const resultLogin = await Login.create({user, email, password, address, city });
    return resultLogin;
};

module.exports = createService;