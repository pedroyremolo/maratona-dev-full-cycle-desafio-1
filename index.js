const http = require('http');
const routes = require('./routes');

const serverPort = 3000;

const server = http.createServer(routes.handler);

console.log(`Startando o servidor na porta ${serverPort}....`);

server.listen(serverPort);

console.log(`Servidor startado`);