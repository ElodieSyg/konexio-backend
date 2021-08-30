const express = require('express');
const app = express();
const PORT = 3000;
const pokemon = require('./pokemon.json');

app.get('/', (req, res) => {
    res.send('Pokemon API');
});

app.get('/pokemon/:number', (req, res) => {
    const number = req.params.number;
    const name = pokemon.abilities.ability;
    console.log(number, name);

    res.send(`name: ${pokemon[name]}, id: ${pokemon.id}`)
});

app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});