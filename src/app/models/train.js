module.exports = (sequelize, DataTypes) => {
    const Train = sequelize.define('Train', {
        number: DataTypes.STRING,
        lineName: DataTypes.STRING,
    });

    return Train;
}