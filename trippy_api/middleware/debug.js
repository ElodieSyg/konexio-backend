function debug(req, res, next) {
    console.log(`Request "${req.method}" on "${req.url}" the ${new Date()}`);
    next();
};

module.exports = debug;