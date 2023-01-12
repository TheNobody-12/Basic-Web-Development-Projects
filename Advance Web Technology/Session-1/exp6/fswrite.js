var fs = require('fs');

fs.writeFile('sk3.txt','Hello Sarthak Kapaliya!',function (err){
    if(err) throw err;
    console.log('Replaced');
    console.log('Sarthak Kapaliya');
});