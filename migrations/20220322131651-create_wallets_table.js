'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable("Wallets", {
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
  },
  amount:Sequelize.INTEGER(20),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("Wallets")
  }
};
