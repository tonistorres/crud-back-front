require('dotenv').config();
const app = require('express')();
const routes = require('./src/routes');

const PORT = process.env.SERVER_PORT;

app.use(routes);

app.listen(PORT, ()=> console.log(`${PORT}`));