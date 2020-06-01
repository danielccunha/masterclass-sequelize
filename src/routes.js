const express = require('express');
const controllers = require('./controllers');

const routes = express.Router();

// Users
routes.get('/users', controllers.User.index);
routes.post('/users', controllers.User.store);

// Addresses
routes.get('/users/:userId/addresses', controllers.Address.index);
routes.post('/users/:userId/addresses', controllers.Address.store);

module.exports = routes;
