module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Trains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      number: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      lineName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Trains');
  }
};
