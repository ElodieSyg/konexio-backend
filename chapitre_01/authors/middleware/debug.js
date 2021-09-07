function debug(req, res, next) {
    console.log(`Request on ${req.method} the ${new Date()}`);
};

module.exports = debug;