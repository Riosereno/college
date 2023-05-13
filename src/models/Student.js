const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Student= sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    

});

module.exports = Student;