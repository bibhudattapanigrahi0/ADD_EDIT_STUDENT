const  Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'babul98', {
  host: 'localhost',
  dialect:  'mysql',
  port:'1433'
});
const db={};
db.s=sequelize
module.export = db;
