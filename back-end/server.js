require('dotenv').config();
const app = require('express')();

const PORT = process.env.SERVER_PORT;

app.listen(PORT, ()=> console.log(`${PORT}`));