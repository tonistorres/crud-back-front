const notFound = (message) => {
    return {
        status: 404,
        message
    }
};

module.exports = notFound;