// HOW to send email via node js'
const nodemailer =  require('nodemailer');
var fs=require('fs');

require.extensions['.html'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

 var data = require('./index-17.html'); // path to your HTML template


let mailTransporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'skapaliya@gmail.com',
        pass: 'tgyptqkobwghehns'
    }
});


var maillist = [
    'skapaliya@gmail.com',
    'sarthak.kce20@sot.pdpu.ac.in',
  ];

let mailDetails = {
    from: 'skapaliya@gmail.com',
    to:maillist,
    subject:'Sent using nodejs with attachments',
    html:data,
};

mailTransporter.sendMail(mailDetails, function(err,info){
    if (err) {
        console.log("Error has been occurred");
    }
    else{
        console.log("Name : Sarthak Kapaliya");
        console.log("Roll No : 20BCP072");
        console.log("Email has been sent successfully"+info.response);
    }
})