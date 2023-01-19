const nodemailer = require('nodemailer');
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'skapaliya@gmail.com',
        pass: 'tgyptqkobwghehns'
    }
});
let mailDetails = {
    from: 'skapaliya@gmail.com',
    to: 'skapaliya@gmail.com',
    subject: 'Test mail - PDEU Sem 6 - AWTP',
    text: 'Node.js testing mail with attachment for PDEU Sem 6 - AWTP',
    attachments: [
        {
            filename: 'a.txt',
            path:__dirname + '/a.txt'
        }
    ]
};
mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
        console.log('Sarthak Kapaliya 20BCP072');
    }
});