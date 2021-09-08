const express = require(`express`);
const app = express();
const dotenv = require(`dotenv`);
dotenv.config({
    path: `./config.env`,
});
const mongoose = require(`mongoose`);
// Import middlewares
const debug = require(`./middleware/debug`);
// Import router
const router = require(`./router/router`);
const userRouter = require(`./router/userRouter`);

// MongoDB connection
mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log(`Connected to MongoDB`)
    });

// Middlewares
app.use(express.json());
app.use(debug);
app.use('/', router);
app.use('/user', userRouter);

// Starting server
app.listen(process.env.PORT, () => {
    console.log(`Server started, listening on port ${process.env.PORT}`);
});