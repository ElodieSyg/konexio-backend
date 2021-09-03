const express = require('express');
const app = express();
const PORT = 3000;
// Librairies
const expressValidator = require('express-validator');
const passwordValidator = require('password-validator');

const users = [
    {
        username: 'ElodieSyg',
        email: 'sayavong.pro@gmail.com',
        age: 24,
        ville: 'Paris'
    }
];

// Middlewares
app.use(express.json());
app.use((req, _res, next) => {
    console.log(`Request "${req.method}" on "${req.url}" the ${new Date()}`);
    next();
});

// Routing
app.route('/')
    .get((_req, res) => {
        res.json({
            status: 'OK',
            message: 'Users list',
            data: users,
        });
    });

// Ajoute un utilisateur
app.route('/users')
    .post((req, res) => {
        const newUser = req.body;
        users.push(newUser);

        res.json({
            status: 'OK',
            message: `You just added ${newUser.username}`,
            data: users,
        });
    });

// Envoi les infos d'un utilisateur précis
app.route('/users/:username')
    .get((req, res) => {
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

// Bonus 
app.route('/:id')
    .get((req, res) => {
        res.json({
            status: 'OK',
        });
    });

app.route('/users/email/:email')
    .get((req, res) => {
        res.json({
            status: 'OK',
        });
    });


app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});