const express = require('express'),
	  app = express();
	  api = require('../api/api.js'),
	  bps = require('body-parser'),
	  passport = require('passport'),
	  mongoose = require('mongoose'),
	  User = require('../api/v1/applicant/applicant-model'),
	  morgan = require('morgan'),
	  cors = require('cors'),
	  { DB_URL } = require('../../config/config');

app.use(bps.json());
app.use(bps.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1', api);

mongoose.connect(DB_URL)
    .then(function(){
        console.log("Connected to", DB_URL);
    })
    .catch(function(){
        console.log("error connecting to", DB_URL);
    });

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send(err.message);
	next();
});

module.exports = app;