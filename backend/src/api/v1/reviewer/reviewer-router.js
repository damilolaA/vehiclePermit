const express = require('express'),
	  Router = express.Router(),
	  ReviewerController = require('./reviewer-controller.js');

Router.route('/')
	.post(ReviewerController.addReviewer);

module.exports = Router;