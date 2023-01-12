var fs= require('fs')

fs.appendFile('sk.txt','Hello Sarthak abcabcabcb!',function (err){
    if(err) throw err;
    console.log('Replaced!');
});

