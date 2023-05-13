const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Score = sequelize.define('Score', {
    studentId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    testId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    score: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Score;