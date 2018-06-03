const express = require('express'),
	  Router = express.Router(),
	  authController = require('./auth-controller.js');

Router.route('/')
	.post(authController.verifyApplicant);

module.exports = Router;