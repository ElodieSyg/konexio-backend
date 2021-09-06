const express = require('express');
const router = express.Router;
// Data
const restaurantData = require('../data/restaurantData');

// Routers
router.route('/')
    .get((req, res) => {
        res.json({
            status: 'OK',
            action: 'retourne tous les restaurants'
        });
    })
    .post((req, res) => {
        res.json({
            status: 'OK',
            action: 'ajoute un nouvel restaurants'
        });
    });

router.route('/:id')
    .get((req, res) => {
        res.json({
            status: 'OK',
            action: 'retourne les restaurants selon les identifiants'
        });
    })
    .delete((req, res) => {
        res.json({
            status: 'OK',
            action: 'delete un restaurants'
        })
    })
    .put((req, res) => {
        res.json({
            status: 'OK',
            action: 'met à jour le nom du restaurants avec un query params :id?name=newName'
        });
    });

module.exports = router;