const express = require('express');
const app = express();
const PORT = 4000;
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

app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});