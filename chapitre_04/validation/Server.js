const express = require('express');
const app = express();
const PORT = 3000;
// Middlewares
const debug = require('./middlewares/debug');
// Routers 
const route = require('./routers/route');
const usersRouter = require('./routers/usersRouter');

// Middlewares
app.use(express.json());
app.use(debug);
app.use('/', route);
app.use('/users', usersRouter);

// Bonus 
app.route('/:id')
    .get((req, res) => {
        res.json({
            status: 'OK',
        });
    });

app.route('/users/email/:email')
    .get((req, res) => {
        res.json({
            status: 'OK',
        });
    });


app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});