const express = require('express');
const controllers = require('./controllers');

const routes = express.Router();

// Users
routes.get('/users', controllers.User.index);
routes.post('/users', controllers.User.store);

// Addresses
routes.get('/users/:userId/addresses', controllers.Address.index);
routes.post('/users/:userId/addresses', controllers.Address.store);

// Techs
routes.get('/users/:userId/techs', controllers.Tech.index);
routes.post('/users/:userId/techs', controllers.Tech.store);
routes.delete('/users/:userId/techs', controllers.Tech.delete);

// Reports
routes.get('/reports', controllers.Report.index);

module.exports = routes;
