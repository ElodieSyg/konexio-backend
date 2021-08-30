const express = require("express");
const port= 8000;

const app= express();

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
]


app.get('/', (req, res) => {
    res.send('Authors API');
  });

app.get("/authors/:number", (req, res) => {
        var number= req.params.number - 1;
        res.send(`${authors[number].name}, ${authors[number].nationality}`);
});

app.get("/authors/:number/books", (req, res) => {
    var number= req.params.number - 1;
    res.send(`${authors[number].books}`);
});

app.get("/json/authors/:id", (req, res) => {
    let value = req.params.id;
    res.json({name: authors[value].name,
    nationality: authors[value].nationality})

});

app.get("/json/authors/:id/books", (req, res) => {
    let value = req.params.id;
    res.json({books: authors[value].books})

})

app.listen(port, () =>  {
    console.log("Server started on port: " + port);
});