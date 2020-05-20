'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.createTable('Cars', { 
        id:{
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER,
        },
        number:{
          allowNull: false,
          type: Sequelize.DataTypes.STRING,
        },
        status:{
          values:['cheio', 'moderado', 'vazio'],
          type: Sequelize.DataTypes.ENUM,
          defaultValue: 'vazio',
        },
        createdAt:{
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
        },
        updatedAt:{
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Cars');
  }
};
