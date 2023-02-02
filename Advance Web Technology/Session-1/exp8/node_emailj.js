const nodemailer = require('nodemailer');
var fs = require('fs');

console.log('Sarthak Kapaliya 20BCP072');

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'skapaliya@gmail.com',
        pass: 'tgyptqkobwghehns'
    }
});

fs.readFile('./imagej.html', "utf-8", function (err, data) {
    console.log(err)
    var mailOptions = {
        from: 'skapaliya@gmail.com',
        to: 'skapaliya@gmail.com,sarthak.kce20@sot.pdpu.ac.in',
        subject: "Mail with Image and Background img",
        html: data,
        attachments: [{
            filename: 'logo.jpg',
            path: "logo.jpg",
            cid: 'logo'
        }]
    };

    mailTransporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email has been sent successfully!");
        }
    });
});

