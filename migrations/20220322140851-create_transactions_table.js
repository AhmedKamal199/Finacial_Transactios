'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable("transactions", {
  id:{
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  type: {
    type:Sequelize.STRING(50),
    allowNull:false,
    unique: true
  },
  amount: {
   type:Sequelize.INTEGER(11),
   default:0
  },
  walletId: Sequelize.INTEGER(11),
  cateId: Sequelize.INTEGER(11),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("transactions")
  }
};
