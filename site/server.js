const http = require('http');




var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Wicho is thdse best of the World!!!\n');


});

server.listen(8000);


console.log("Server started!!!!")