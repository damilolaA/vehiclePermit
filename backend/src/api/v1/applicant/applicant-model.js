const mongoose = require('mongoose'),
      bcrypt = require('bcrypt-nodejs'),
	  Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.methods = {
    authenticate: function(password) {
        return bcrypt.compareSync(password, this.password);
    },
    encryptPassword: function(password) {
        if(!password) {
            return null;
        }
        else {
            var salt = bcrypt.genSaltSync(10);
            this.password = bcrypt.hashSync(this.password, salt);
        }
    }
};

userSchema.pre("save", function(next) {
    if(!this.isModified("password")) {
        return next();
    }

    this.encryptPassword(this.password);
    return next();
});

let User = mongoose.model("applicant", userSchema);

module.exports = User;