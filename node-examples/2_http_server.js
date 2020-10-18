/*
Una aplicación de Node.js consiste de:
Importar los módulos requeridos
Un servidor
Un request y un reponse
*/

var http = require("http")

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World!');
}).listen(3000);

console.log('Server running in port 3000');
