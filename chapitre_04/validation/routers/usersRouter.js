const express = require('express');
const router = express.Router();
// Middleware 
const checkInfo = require('../middlewares/checkInfo');
// Données 
const users = require('../usersVariable');
const { validationResult } = require('express-validator');

router.post('/', checkInfo, (req, res) => {
    const newUser = req.body;

    users.push(newUser);

    const errors = validationResult(req)
    if (errors.isEmpty()) {
        res.json({
            status: 'OK',
            message: `You just added ${newUser.username}`,
            data: users,
        })
    } else {
        res.json(errors)
    };
});

router.get('/users/:username', (req, res) => {
    const name = req.params.username.toLocaleLowerCase();
    const match = users.find(
        obj => obj.username.toLocaleLowerCase() === name
    );

    if (match) {
        res.json({
            status: 'OK',
            message: `You asked ${name}`,
            data: match,
        });
    } else {
        res.json({
            status: 'ERROR',
            message: 'Sorry, the user don t exist',
        });
    };
});

module.exports = router;