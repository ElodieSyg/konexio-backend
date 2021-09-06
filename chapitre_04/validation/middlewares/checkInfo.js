const { body, validationResult } = require('express-validator');

function checkInfo() {
    body('username').isString().isLength({ min: 4 }),
        body('email').isEmail(),
        body('age').isNumeric().isLength({ min: 2 }),
        body('city').isString().isLength({ min: 4 })
};

module.exports = checkInfo;