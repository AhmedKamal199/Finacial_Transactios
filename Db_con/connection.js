const Sequelize = require("sequelize");
require("dotenv").config();
const password = "Password@1234"
const sequelize= new Sequelize("Finacial_Transactions", 
	"fin",password,
	{
		host: '127.0.0.1',
		 dialect:"mysql", 
		 operatorsAliasses: false ,
		 pool:{
		 	max:5,
		 	min:0,
		 	aquire:30000,
		 	idle: 10000,
		 },

	})
sequelize.sync({});
module.exports = sequelize;

global.sequelize = sequelize;
