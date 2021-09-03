const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const upload = multer({ dest: 'public/upload' });

const PORT = 3000;
const users = [];

const app = express();

// Functions
function renamePicture(req, res, next) {
    const pathToFile = path.join(__dirname, req.path)
    const newPathToFile = path.join(__dirname, `username-date-heure.png`)

    /*     const date = new Date();
        console.log(date);
     */

    console.log('req_path', req.path)


    fs.rename(pathToFile, newPathToFile, function (err) {
        if (err) {
            return err
        } else {
            res.json({
                status: 'OK',
                message: 'Successfully renamed the file!',
            })
        };
    });
    next();
};

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static((__dirname)));

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
    .post(upload.single('image'), renamePicture, (req, res) => {
        const newUser = { username: req.query.username };
        newUser.id = uuidv4();
        newUser.created = new Date();

        console.log(newUser)
        users.push(newUser);

        res.json({
            status: 'OK',
            message: 'User and image added',
            data: users,
        });
    });

// Starting server
app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});