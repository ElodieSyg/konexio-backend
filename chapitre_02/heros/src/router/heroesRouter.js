const express = require('express');
const router = express.Router();
// Import model
const Heroes = require('../model/heroes.model');
// Import middleware
const checkNameGet = require('../middleware/checkNameGet');
const checkNamePost = require('../middleware/checkNamePost');
const checkNameDelete = require('../middleware/checkNameDelete');

router.route('/')
    .get(async (_req, res) => {
        const data = await Heroes.find();
        console.log(data)

        res.json({
            status: 'OK',
            message: 'Heroes API',
            data: data,
        })
    })
    .post(checkNamePost, async (req, res) => {
        const hero = req.body;
        const newHero = await Heroes.create(hero);

        res.json({
            status: 'OK',
            message: 'Hero added to the list',
            data: newHero,
        });
    });

router.route('/:name')
    .get(checkNameGet, async (req, res) => {
        const name = req.params.name;
        const hero = await Heroes.findOne({ name: new RegExp(name, 'i').replace(' ', '') });

        res.json({
            status: 'FAIL',
            message: `This hero don't exist`,
        });
    })
    .delete(checkNameDelete, async (req, res) => {
        const name = req.params.name;
        const hero = await Heroes.deleteOne({ name: new RegExp(name, 'i') });

        res.json({
            status: 'OK',
            message: `You deleted this hero`,
        });
    });

router.route('/:name/powers')
    .get(checkNameDelete, async (req, res) => {
        const name = req.params.name;
        const hero = await Heroes.findOne({ name: new RegExp(name, 'i') });

        res.json({
            status: 'OK',
            message: `You asked ${name}'s powers`,
            data: hero.power,
        });
    })
    .patch(async (req, res) => {
        const name = req.params.name;
        const newPower = req.body.power;
        const hero = await Heroes.findOne({ name: new RegExp(name, 'i') });

        hero.power.push(newPower)

        res.json({
            status: 'OK',
            message: `${name}'s powers was updated`,
            data: hero,
        });
    });

module.exports = router;