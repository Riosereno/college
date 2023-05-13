const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Test = sequelize.define('Test', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    
});

module.exports = Test;