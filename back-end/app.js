const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const errorHandler = require('./middlewares/errorHandler.js');
const { errors } = require('celebrate');


app.use(cors());

app.use(express.json());

app.use(routes);

app.get('/', (req, res) => {
    return res.send('<h1>Olá 1 estou funcionando</h1>')
});

app.use(errors());
app.use(errorHandler);

module.exports = app;