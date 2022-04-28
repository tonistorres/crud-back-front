const { create } = require('../../services/login');

const createController = async (req, res, next) => {
 try {
   console.log(req.body);
      const { user, email, password, address, city } = req.body;
      const resultLogin = await create({ user, email, password, address, city });
      return res.status(201).json(resultLogin);
  } catch (error) {
    next(error);
  }
};

module.exports = createController;