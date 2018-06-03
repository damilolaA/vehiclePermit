const express = require('express'),
	  Router = express.Router(),
	  UserController = require('./applicant-controller.js');

Router.route('/')
	.post(UserController.addUser);

module.exports = Router;