const express = require('express');
const router = express.Router;
// Data
const hotelData = require('../data/hotelData');

// Routers
router.route('/')
    .get((req, res) => {
        res.json({
            status: 'OK',
            action: 'retourne tous les hotels'
        });
    })
    .post((req, res) => {
        res.json({
            status: 'OK',
            action: 'ajoute un nouvel hotel'
        });
    });

router.route('/:id')
    .get((req, res) => {
        res.json({
            status: 'OK',
            action: 'retourne les hotels selon les identifiants'
        });
    })
    .delete((req, res) => {
        res.json({
            status: 'OK',
            action: 'delete un hotel'
        })
    })
    .put((req, res) => {
        res.json({
            status: 'OK',
            action: 'met à jour le nom de l hotel avec un query params :id?name=newName'
        });
    });

module.exports = router;