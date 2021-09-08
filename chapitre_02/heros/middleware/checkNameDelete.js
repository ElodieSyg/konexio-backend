// Import model
const Heroes = require('../model/heroes.model');

async function checkNameDelete(req, res, next) {
    const name = req.params.name;
    const hero = await Heroes.findOne({ name: new RegExp(name, 'i') });

    if (!hero) {
        res.json({
            status: 'OK',
            message: `This hero don't exist`,
        });
    } else {
        next();
    };
};

module.exports = checkNameDelete;