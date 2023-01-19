const nodemailer = require('nodemailer');
const fs = require('fs');
import handlebars from "handlebars";
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'skapaliya@gmail.com',
        pass: 'tgyptqkobwghehns'
    }
});
const filePath = path.join(__dirname, '../emails/template.html');
  const source = fs.readFileSync(filePath, 'utf-8').toString();
  const template = handlebars.compile(source);
  const htmlToSend = template(replacements);

let mailDetails = {
    from: 'skapaliya@gmail.com',
    to: 'skapaliya@gmail.com',
    subject: 'Test mail - PDEU Sem 6 - AWTP',
    html:htmlToSend
    // render index.html file from the directory
};

mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
        console.log('Sarthak Kapaliya 20BCP072');
    }
});