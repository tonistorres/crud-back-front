const { authentication }=require('../../services/login/');

const authenticationController = async (req, res) => {
    try {
      // console.log('controller:',req.body);
      const user = await authentication(req.body);
      
      if (user.erro) {
        return res
        .status(user.codeNumber)
        .json({ menssagem: user.msg });  
      }
  
      return res.status(200).json(user);
      
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Erro no Servidor" });
    }
  }
    module.exports = authenticationController;