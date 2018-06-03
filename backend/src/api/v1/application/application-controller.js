const ApplicationModel = require('./application-model.js'),
	  ReviewerModel = require('../reviewer/reviewer-model.js'),
	  sendMail = require('../mailer.js');

let registrationMail = "<h3>Drivers Registration</h3>" +
                        "<p>Your Application is currently been processed.</p>" + 
                        "<p>You'll be contacted in some few days</p>";

let reviewerEmail = "<h3>A new Drivers Registration is available for reviewing</h3>"

exports.handleApplication = (req, res, next) => {
	let userData = req.body,
		{ email } = userData;
		console.log(userData);
	let application = new ApplicationModel(userData);

	  application.save((err, data) => {
	    if (err) {
	    	console.log(err);
	      return next(new Error('server error while saving user data'));
	    } else {
	    	sendMail(email, "Registration", registrationMail)
	    		.then(info => {
	    			ReviewerModel.find()
	    				.then(reviewer => {
	    					console.log(reviewer)
	    					if(reviewer) {
	    						sendMail(reviewer.email, "Notification", reviewerEmail)
	    							.then(info => {
	    								console.log(info)
	    							})
	    					}
	    				})
	    		})
	    		.catch(err => {
	    			console.log(err);
	    		})
	    }

	    res.status(200).json(data);
	});
}