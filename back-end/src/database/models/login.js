module.exports = (sequelize, DataTypes) => {

  const Login = sequelize.define('Login', {
    user: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING
});

return Login;

}















