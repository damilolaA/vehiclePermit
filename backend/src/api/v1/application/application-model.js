const mongoose = require('mongoose'),
	  Schema = mongoose.Schema;

let ApplicationSchema = new Schema({
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    date: {
        type: String
    },  
    sex: {
        type: String
    },
    state: {
        type: String
    },
    occupation: {
        type: String
    },
    address: {
        type: String
    },
    image: {
        type: String
    }
});

let Application = mongoose.model("application", ApplicationSchema);

module.exports = Application;