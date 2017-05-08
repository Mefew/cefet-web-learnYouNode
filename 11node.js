var http = require('http');
var fs = require('fs');

var porta = Number(process.argv[2]);
var arquivo = process.argv[3];

var server = http.createServer(function (request, response) {

	response.writeHead(200, { 'content-type': 'text/plain' })
	var source = fs.createReadStream(arquivo);
	source.pipe(response);
});

server.on('error', console.error);
server.listen(porta);