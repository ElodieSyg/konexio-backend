const express = require('express');
const app = express();
const PORT = 3000;
const country = require('../country.json');

app.get('/', (req, res) => {
    res.send('Country API');
});

app.get('/country/:name', (req, res) => {
    const name = req.params.name;
    console.log(name);

    res.send(`You choose the country ${country[name]}`);
});

app.get('/:name/:capital', (req, res) => {
    const name = req.params.name;
    const capital = req.params.capital

    res.send(`The capital of ${country[name]} is ${country[capital]}`);
});

app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}.`);
});