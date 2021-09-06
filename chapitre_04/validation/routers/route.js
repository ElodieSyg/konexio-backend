const express = require('express');
const router = express.Router();
// Données 
const users = require('../usersVariable');

router.get('/', (_req, res) => {
    res.json({
        status: 'OK',
        message: 'Users list',
        data: users,
    });
});

module.exports = router;