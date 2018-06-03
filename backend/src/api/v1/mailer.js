const nodemailer = require("nodemailer"),
    { EMAIL_AUTH } = require("../../../config/config"),
    sgTransport = require("nodemailer-sendgrid-transport");

let options = {
    auth: EMAIL_AUTH
};

let mailer = nodemailer.createTransport(sgTransport(options));

function sendMail(users, subject, body) {
    let payload = {
        from: "adiodamilola@yahoo.com",
        to: users,
        subject: subject,
        html: body
    }

    return new Promise((resolve, reject) => {
        mailer.sendMail(payload, (err, info) => {
            if(err)
                reject(err)
            else
                resolve(info)
        })
    })
}

module.exports = sendMail;