
module.exports = function(passport, User) {

	const FacebookStrategy = require('passport-facebook').Strategy,
		  config = require('../../../config/config.js'),
		  FACEBOOK_APP_ID = config.FACEBOOK_ID,
		  FACEBOOK_APP_SECRET = config.FACEBOOK_SECRET;

	passport.use(new FacebookStrategy({
	  clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:4000/auth/facebook/callback"
	},
	function(accessToken, refreshToken, profile, cb) {
	    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
	      return cb(err, user);
	    });
	  }
	));

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id)
		.then(user => {
			done(null, user.get())
		})
		.catch(error => {
			done(error, null)
		})
	})
}