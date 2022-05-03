const jwt = require('jsonwebtoken');
require('dotenv').config();
const { Login } = require('../../database/models');

const authenticationService = async (user) => {
  try {
     const SECRET =process.env.SECRET_WORD; 
     const jwtConfig = {
     expiresIn: '1h',
     algorithm: 'HS256',
     }
     const resultSearch = await Login.findOne({ where: { email:user.email, password:user.password }});
      console.log(resultSearch);  
     if(!resultSearch){
       return {
         erro: true,
         codeNumber: 404,
         msg: `User not authorization !!`,
       };
     }
     const {idUser, passwordUser} = resultSearch;
     const token = jwt.sign({id:idUser, senha:passwordUser},SECRET,jwtConfig);
     console.log(token);
     return token;
   } catch (error) {
     return { error: 500, message: "Erro no Servidor" };
   }
 };


 module.exports = authenticationService;