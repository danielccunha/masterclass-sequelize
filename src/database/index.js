const { Sequelize } = require('sequelize');

const config = require('../config/database');
const { User, Address } = require('../models');

const connection = new Sequelize(config);

User.init(connection);
Address.init(connection);

User.associate(connection.models);
Address.associate(connection.models);

module.exports = connection;
