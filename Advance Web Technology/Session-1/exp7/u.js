var http = require('http');
var formidable = require('formidable');
var fs = require('fs');


http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            let date_time = new Date();
            let date = ("0" + date_time.getDate()).slice(-2);
            let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
            let year = date_time.getFullYear();
            let hours = date_time.getHours();
            let minutes = date_time.getMinutes();
            let seconds = date_time.getSeconds();
            let data = date + "-" + month + "-" + year + "-" + hours + "-" + minutes + "-" + seconds + "_";
            var oldpath = files.filetoupload.filepath;
            var newpath = 'C:/nodejs_files/' + data + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<h1>Sarthak Kapaliya [20BCP072]</h1>');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);