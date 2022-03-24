const Sequelize = require("sequelize");

module.exports = sequelize.define("Transactions", {
	id:{
		type: Sequelize.INTEGER(11),
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	
  type: {
    type:Sequelize.STRING(50),
    allowNull:false,
  },
  amount:{
    type: Sequelize.INTEGER(11),
    default: 0
  },
  walletId: Sequelize.INTEGER(11),
  cateId: Sequelize.INTEGER(11)
},{freezeTableName:true})