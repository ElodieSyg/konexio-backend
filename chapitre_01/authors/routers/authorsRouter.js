const express = require('express');
const router = express.Router();

router.route('/')
    .get(async (_req, res) => {
        const authors = await Authors.find();
        console.log(authors)

        res.json({
            status: 'OK',
            message: 'Authors API',
            data: authors,
        });
    });

router.route('/:id')
    .get(async (req, res) => {
        const id = await Authors.findById(req.params.id - 1)
        console.log(id)

        res.json({
            status: 'OK',
            message: 'You asked this author',
        })
    });

router.route('/:id/books')
    .get(async (req, res) => {
        const id = await Authors.findById(req.params.id - 1)

        res.json({
            status: 'OK',
            message: 'You asked this author s books',
            data: id.books,
        });
    });

module.exports = router;