const routes = require('express').Router();
const {index} = require("../controller/index");
routes.get('/',index);

module.exports = routes;