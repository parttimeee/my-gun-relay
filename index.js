const http = require('http');
const Gun = require('gun');

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Gun Relay is Running!");
});

// Pass the server to Gun
const gun = Gun({ 
  web: server.listen(port),
  file: 'data/gun-db' // This tells Gun where to save your graph
});

console.log('Relay is active on port', port);
