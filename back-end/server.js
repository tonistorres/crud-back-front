require('dotenv').config();
const app = require('./app')
const PORT =    process.env.PORT_APP=3001;


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));