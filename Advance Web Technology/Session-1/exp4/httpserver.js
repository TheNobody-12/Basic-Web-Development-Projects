const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('<h1>This is Sarthak Kapaliya</h1> <p>Hey this is the way to rock the world!</p>')}
);

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});