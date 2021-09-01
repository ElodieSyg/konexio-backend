const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'public/img' });

const PORT = 3000;
const users = [{ username: 'Elodie', id: Math.floor(Math.random() * 10000), created: new Date() }];

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routing
app.get('/', (_req, res) => (
    res.json({
        status: 'OK',
        message: 'Upload Chapter_03',
    })
));

app.route('/user')
    .get((_req, res) => {
        res.json({
            status: 'OK',
            message: 'Users list',
            data: users,
        });
    })
    .post(upload.single('image'), (req, res) => {
        const newUser = req.body;
        newUser.id = Math.floor(Math.random() * 10000);
        newUser.created = new Date();

        users.push(newUser);

        res.json({
            status: 'OK',
            message: 'Image added',
            data: newUser,
        });
    });

// Starting server
app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});