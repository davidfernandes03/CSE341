const routes = require('express').Router();
const lesson1Controller = require('../controller/lesson1');

routes.get('/', lesson1Controller.main);

module.exports = routes;