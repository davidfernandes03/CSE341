const routes = require('express').Router();
const userController = require('../controller/user_name');

routes.get('/', userController.getUser);
routes.get('/username', userController.getUsername);

module.exports = routes;