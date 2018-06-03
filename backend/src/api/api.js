const express = require('express'),
	  api = express.Router(),
	  applicantRouter = require('./v1/applicant/applicant-router.js'),
	  authRouter = require('./v1/auth/auth-router.js'),
	  applicationRouter = require('./v1/application/application-router.js');
	  reviewerRouter = require('./v1/reviewer/reviewer-router.js');

api.use('/applicant', applicantRouter);
api.use('/auth', authRouter);
api.use('/application', applicationRouter);
api.use('/reviewer', applicationRouter);

module.exports = api;