const http = require("http");

const port = 3000;

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.write('<h1> Este es mi primer servidor HTTP </h1><p>Glo Suarez, triunfando en programacion!</p>');
  response.end();
});

server.listen(port, () => {
  console.log(`Server listens on port ${port}`);
});