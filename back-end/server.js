require('dotenv').config();
const express = require('express');
const routes = require('./src/routes');
const app = express();

const PORT = process.env.SERVER_PORT || 3001;
app.use(express.json());
app.use(routes);

app.get('/',(req,res) =>{
 return res.send('<h1>Show de bola rodando no Docker</h1>')
});

app.listen(PORT, ()=> console.log(`Rondando na Porta: ${PORT}`));