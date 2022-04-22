require('dotenv').config();
const express = require('express');
const routes = require('./src/routes');
const app = express();

const PORT = process.env.SERVER_PORT;
app.use(express.json());
app.use(routes);

app.listen(PORT, ()=> console.log(`${PORT}`));