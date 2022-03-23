const Sequelize = require("sequelize");

module.exports = sequelize.define("Wallets", {
	id:{
		type: Sequelize.INTEGER(11),
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
    type:Sequelize.STRING(50),
    allowNull:false,
    unique: true
  }
})