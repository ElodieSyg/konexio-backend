const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const upload = multer({ dest: 'public/upload' });
// Import model
const User = require('../model/user.model');


router.route('/user')
    .get(async (_req, res) => {
        const users = await User.find();
        console.log(users);

        res.json({
            status: 'OK',
            message: 'Users list',
            data: users,
        });
    })
/*     .post(upload.single('image'), (req, res) => {
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
    }); */

