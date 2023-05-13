const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Profesor = sequelize.define('Profesor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
});

module.exports = Profesor;