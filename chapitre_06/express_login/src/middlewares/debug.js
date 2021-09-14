function debug(req, _res, next) {
    console.log(`Request ${req.method} on router ${req.url} the ${new Date()}`);
    next();
};

module.exports = debug;