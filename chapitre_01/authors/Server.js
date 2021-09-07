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
const authorsRouter = require('./routers/authorsRouter');

// MongoDB connection
mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log('Connected to MongoDB !')
    });

// Middlewares
app.use(express.json());
app.use(debug);
app.use('/authors', authorsRouter);

// Starting server
app.listen(process.env.PORT, () => {
    console.log(`Server started, listening on port ${process.env.PORT}.`);
});