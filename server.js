/*
    Video: https://www.youtube.com/watch?v=Va9UKGs1bwI
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps TODO:
*/

require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:  'dfasdfasdfadfas@gmail.com', // TODO: your gmail account
        pass:  "afdasdfsadfasdfasdfasdf' // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from: 'sdfsadfsd@gmail.com', // TODO: email sender
    to: 'dfasdfasdfsd@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs'+err);
    }
    return log('Email sent!!!');
});
