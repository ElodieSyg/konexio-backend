// Import model
const Heroes = require('../model/heroes.model');

async function checkNameGet(req, res, next) {
    const name = req.params.name;
    const hero = await Heroes.findOne({ name: new RegExp(name, 'i') });

    if (hero) {
        res.json({
            status: 'OK',
            message: `You asked ${name}'s data`,
            data: hero,
        });
    } else {
        next();
    };
};

module.exports = checkNameGet;