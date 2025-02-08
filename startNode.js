const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('CSI203: DIGITAL ARCHITECTURE AND OPERATING SYSTEMS\n  CSI 203.\nWorkshop #3: starNode.js\nนายนันทกร บุญศรี 66032579'); 
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});