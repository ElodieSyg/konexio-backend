const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env",
});
const mongoose = require("mongoose");
// Import middlewares
const debug = require("./middlewares/debug");
// Import routers
const studentRouter = require("./routers/studentRouter");

// MongoDB connection
mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to MongoDB !");
    });

// Middlewares

app.use(debug);
app.use(express.json());
app.use("/student", studentRouter);

// Server started 
app.listen(process.env.PORT, () => {
    console.log(`Server started, listening on port ${process.env.PORT}`);
});