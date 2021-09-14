const express = require("express");
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env",
});
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
// Import middlewares
const debug = require("./middlewares/debug");
// Import Routers
const signRouter = require("./routers/signRouter");
const loginRouter = require("./routers/loginRouter");

// MongoDB connection
mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to MongoDB !");
    });

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(debug);
app.use("/sign", signRouter);
app.use("/login", loginRouter);

// Starting server
app.listen(process.env.PORT, () => {
    console.log("Server started, listening on port", process.env.PORT);
});