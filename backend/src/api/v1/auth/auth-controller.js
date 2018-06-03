const jwt = require('jsonwebtoken'),
  expressJwt = require('express-jwt'),
  ApplicantModel = require('../applicant/applicant-model.js'),
  { JWT_SECRET } = require('../../../../config/config.js');
//  checkToken = expressJwt({ JWT_SECRET });

exports.decodeToken = (req, res, next) => {
  checkToken(req, res, next);
};

exports.verifyApplicant = (req, res, next) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return next(new Error('please pass email and password'));
  }

  ApplicantModel.findOne({ email }, (err, data) => {
    if (err) {
      return next(new Error('could not find email address'));
    }

    if (data == null) {
      return next(new Error('invalid username and/or password'));
    }

    if (!data.authenticate(password)) {
      return next(new Error('invalid username and/or password'));
    } else {
      let token = signToken(data._id);

      return res.status(200).json({
          token: token,
          applicant: data
      });
    }
  });
};

let signToken = (id) => {
  return jwt.sign({ _id: id }, JWT_SECRET, { expiresIn: 60 * 60 * 24 });
}

