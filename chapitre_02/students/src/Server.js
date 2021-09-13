const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({
    path: './config.env',
});
const mongoose = require('mongoose');
// Middleware
const debug = require('./middleware/debug');
// Import router
const studentsRouter = require('./router/studentsRouter');

// MongoDB connection
mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log('Connected to MongoDB !');
    });

// Middlewares
app.use(express.json());
app.use(debug);
app.use('/student', studentsRouter);

// Routing
app.get('/', (_req, res) => {
    res.json({
        message: 'Students API',
    });
});

// Starting server
app.listen(process.env.PORT, () => {
    console.log(`Server started, listening on port ${process.env.PORT}`);
});