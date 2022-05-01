const jwt = require('jsonwebtoken');

const SECRET = 'xablau';

module.exports = async (req, res, next) => {
      try {
      const { authorization } = req.headers;
      
      if (!authorization) {
      return res
        .status(401)
        .json({ message: 'Token not found' });
    }
      const decoded = jwt.verify(authorization, SECRET);
      const user = decoded;
      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
};