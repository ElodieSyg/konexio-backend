const express = require("express");
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env",
});
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
// Import middlewares
const debug = require("./middlewares/debug");
// Import Routers
const signRouter = require("./routers/signRouter");

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

// Starting server
app.listen(process.env.PORT, () => {
    console.log("Server started, listening on port", process.env.PORT);
});