const { Sequelize } = require('sequelize');

const config = require('../config/database');
const { User, Address, Tech } = require('../models');

const connection = new Sequelize(config);

User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;
