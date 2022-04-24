const errorHandler = (err, req, res, next) => {
    if(err.status) {
      return res.status(err.status).json({ message: err.message });
    }
    console.log(err);
    return res.status(500).json({ message: 'server error' });
  };
  
  module.exports = errorHandler;