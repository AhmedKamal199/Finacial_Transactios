const Sequelize = require("sequelize");

module.exports = sequelize.define("Categories", {
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
  }},{freezeTableName:true})