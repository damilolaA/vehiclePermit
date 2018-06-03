const express = require('express'),
	  Router = express.Router(),
	  ApplicationController = require('./application-controller.js');

Router.route('/')
	.post(ApplicationController.handleApplication);

module.exports = Router;