const express = require('express');
const router = express.Router();
// Import model
const User = require('../model/user.model');

router.route('/')
    .get((_req, res) => {
        res.json({
            status: 'OK',
            message: 'Upload Chapter_03',
        });
    })
    .post(async (req, res) => {
        const newUser = await User.create(req.body);

        res.json({
            message: 'ok',
            data: newUser,
        });
    });

module.exports = router