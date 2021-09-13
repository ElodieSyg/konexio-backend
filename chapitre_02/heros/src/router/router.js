const express = require('express');
const router = express.Router();

// Routing
router.route('/')
    .get((_req, res) => {

        res.json({
            status: 'OK',
            message: 'Heroes API',
        })
    });

module.exports = router;