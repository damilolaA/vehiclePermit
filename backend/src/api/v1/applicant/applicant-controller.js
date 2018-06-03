const UserModel = require('./applicant-model.js');

exports.addUser = (req, res, next) => {
	let userData = req.body;

	let user = new UserModel(userData);

	  user.save((err, data) => {
	    if (err) {
	    	console.log(err);
	      return next(new Error('server error while saving user data'));
	    }

	    res.status(200).json(data);
	});
}

