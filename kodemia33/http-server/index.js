const http = require("node:http");
/*
const port = 3000;

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.write('<h1> Este es mi primer servidor HTTP </h1><p>Glo Suarez, triunfando en programacion!</p>');
  response.end();
});

server.listen(port, () => {
  console.log(`Server listens on port ${port}`);
});
*/
const server = http.createServer((request, response)=>{
  console.log("request", request)
  const method = request.method
  const url = request.url

  response.end(`${method}: ${url}`)
})

server.listen(8080, ()=>{
  console.log("Server is listening on port 8080")
})

/*
const otroServer = http.createServer((request, response)=>{
  response.end("HOLA DESDE OTRO SERVER")
})

otroServer.listen(8081,()=>{
console.log("otro server is listenind on port 8081")
})
  */
