const http = require('http');

const PORT = 12344;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(PORT);

console.log('server running...');