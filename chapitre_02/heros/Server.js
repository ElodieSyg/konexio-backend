const express = require('express');
const app = express();
const PORT = 3000;

let superHeros = [
    {
        name: "Iron Man",
        power: ["money"],
        color: "red",
        isAlive: true,
        age: 46,
        image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
    },
    {
        name: "Thor",
        power: ["electricty", "worthy"],
        color: "blue",
        isAlive: true,
        age: 300,
        image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
    },
    {
        name: "Daredevil",
        power: ["blind"],
        color: "red",
        isAlive: false,
        age: 30,
        image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
    }
];

function midError(_req, _res, next) {
    console.log('Je fais un console.log à chaque requête', new Date().toDateString());
    next();
};;

app.use(midError);


app.get('/', (req, res) => {
    res.json({
        message: 'Heros API',
    });
});

app.post('/heros', (req, res) => {
    const value = req.params.value;
    superHeros.push(value);
    console.log(value);

    res.json({
        message: 'Body added',
    });
});

app.get('/heros', (req, res) => {
    const herosName = superHeros.map(name => name.name);

    res.json({
        data: herosName,
    });
});

app.getMaxListeners('/heros/:name', (req, res) => {
    const name = req.params;

    res.json({
        message: superHeros[name],
    })
})

// reste du code 

app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});