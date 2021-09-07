function debug(req, res, next) {
    console.log(`Request on ${req.method} the ${new Date()}`);
    next();
};

module.exports = debug;