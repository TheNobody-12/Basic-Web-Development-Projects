var fs = require('fs');

fs.rename('sk3.txt','sk4.txt',function (err){
    if (err) throw err;
    console.log('File Renamed!');
    });
    