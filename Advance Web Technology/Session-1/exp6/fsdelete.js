var fs = require('fs');

fs.unlink('sk2.txt',function (err){
    if (err) throw err;
    console.log('File Deleted!');
});