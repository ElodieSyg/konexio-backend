const express = require('express');
const app = express();
const PORT = 3000;

let superHeros = [
    {
        name: "IronMan",
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
};

// Functions
function transformName(req, _res, next) {
    const heroName = req.body.name;
    heroName.toLocaleLowerCase();
    next();
};

function checkName(req, res, next) {
    const newHero = req.body;
    const heroesNames = superHeros.map(item => item.name).find(name => name === newHero.name);

    if (newHero.name === heroesNames) {
        console.log('Le héro existe');
        next();
    } else {
        res.json({
            message: 'Le héro n existe pas, vous pouvez donc pas le supprimer',
        });
    };
};

// Middlewares
app.use(express.json());
app.use(midError);

// Routing
app.get('/', (_req, res) => {
    res.json({
        message: 'Heros API',
    });
});

app.route('/heroes')
    .get((_req, res) => {
        res.json({
            message: 'Heros list',
            data: superHeros,
        });
    })
    .post(transformName, (req, res) => {
        const newHero = req.body;
        const heroesNames = superHeros.map(item => item.name).find(name => name === newHero.name);

        if (newHero.name === heroesNames) {
            res.json({
                message: 'Le héro est déjà dans la liste',
            });
        } else {
            superHeros.push(newHero);
            res.json({
                message: 'Le héro à bien été ajouté',
            });
        };
    });

app.route('/heroes/:name')
    .get((req, res) => {
        const heroName = req.params.name;
        const find = superHeros.find(element => element.name.toLocaleLowerCase() === heroName);

        res.json({
            message: `Vous avez demandé : ${heroName}`,
            data: find,
        });
    })
    .delete(checkName, (req, res) => {
        const newHero = req.body;
        const heroToDelete = superHeros.find(hero => hero.name === newHero.name);
        const index = heroesNames.indexOf(newHero.name);

        console.log(heroesNames);

        console.log(index)
        console.log(newHero.name)

        res.json({
            message: `${newHero.name} effacé correctement, index : ${index}`,
            data: superHeros.slice(index, index + 1),
        });
    });

app.route('/heroes/:name/powers')
    .get((req, res) => {
        const heroName = req.params.name;
        const find = superHeros.find(element => element.name.toLocaleLowerCase() === heroName);

        res.json({
            message: `Vous avez demandé les pouvoirs de ${heroName}`,
            data: find.power,
        });
    })
    .patch((req, res) => {
        const heroName = req.params.name;
        const newPower = req.body.power;
        const find = superHeros.find(element => element.name.toLocaleLowerCase() === heroName);

        find.power.push(newPower);

        res.json({
            message: `Vous avez ajouté un nouveau pouvoir à ${heroName}`,
            data: superHeros,
        });
    });

// Starting server
app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});