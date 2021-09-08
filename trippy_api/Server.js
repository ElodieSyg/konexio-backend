const express = require('express');
const app = express();
const dotenv = require(`dotenv`);
dotenv.config({
    path: `./config.env`,
});
const mongoose = require('mongoose');

// MongoDB connection 
mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log(`Connected to MongoDB`);
    });

// Middlewares
const debug = require('./middleware/debug');
// Routers
const hotelRouter = require('./router/hotelRouter');
const restaurantRouter = require('./router/restaurantRouter');

// Middlewares
app.use(debug);
app.use(express.json());
app.use('/hotels', hotelRouter);
app.use('/restaurants', restaurantRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server started, listening on port ${process.env.PORT}`);
});