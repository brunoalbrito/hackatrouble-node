module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
        number: DataTypes.STRING,
        status:{
            type: DataTypes.ENUM,
            values: ['cheio', 'moderado', 'vazio'],
            defaultValue: 'vazio'
        }
    });

    return Car;
}