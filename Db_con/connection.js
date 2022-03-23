const Sequelize = require("sequelize");
require("dotenv").config();
const password = "finpdueiwoejurpajfldone.ejlrwelj3uutorjurotulrtgihnyildjfljdfldj1309782"
const sequelize= new Sequelize("Financial_Transactions", 
	"fin",password,
	{
		host: '127.0.0.1',
		 dialect:"mysql", 
		 operatorsAliasses: false 
	})

module.exports = sequelize;

global.sequelize = sequelize;
