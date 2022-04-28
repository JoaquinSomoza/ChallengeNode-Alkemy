const config = require('../../config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.db_mysql.database, config.db_mysql.user, config.db_mysql.password, {
    dialect: 'mysql',
    host: config.db_mysql.host
});

module.exports = sequelize;