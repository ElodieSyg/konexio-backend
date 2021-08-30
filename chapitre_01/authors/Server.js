const express = require('express');
const app = express();
const PORT = 3000;

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
];

app.get('/', ((req, res) => {
    res.json({
       message: 'Authors API'
    });
}));

app.get('/authors/:id', (req, res) => {
    let id = req.params.id - 1;
    console.log(id);

    res.send(`Name : "${authors[id].name}", nationality : "${authors[id].nationality}"`);
});

app.get('/authors/:id/books', (req, res) => {
    let id = req.params.id - 1;
    res.send(`books : "${authors[id].books}"`);
});

app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}.`);
});