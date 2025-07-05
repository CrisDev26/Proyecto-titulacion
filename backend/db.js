const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('titulaciondb', 'postgres', 'cristhyan2612', {
  host: 'localhost',
  dialect: 'postgres',
});
module.exports = sequelize;