// Import model
const Heroes = require('../model/heroes.model');

async function checkNamePost(req, res, next) {
    const name = req.params.name;
    const hero = await Heroes.findOne({ name: new RegExp(name, 'i') });

    if (!hero) {
        res.json({
            status: 'FAIL',
            message: 'This hero already exist',
            data: hero,
        });
    } else {
        next();
    };
};

module.exports = checkNamePost;