const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
    cedula: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    telefono: DataTypes.STRING,
    tipo_contrato: DataTypes.STRING,
    dedicacion: DataTypes.STRING,
    estado: DataTypes.STRING,
    password: DataTypes.STRING,
    rol: DataTypes.STRING
}, {
    tableName: 'usuarios', // Debe coincidir con tu tabla en la BD
    timestamps: false
});

module.exports = User;
