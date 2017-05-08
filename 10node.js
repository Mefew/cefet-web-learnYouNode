var net = require ('net');

var date = new Date();
// Start a TCP Server
// A funcao function abaixo e' onConnection
// por padrão
var server = net.createServer(function (socket) {

	// Identify this client
	socket.name = socket.remoteAddress + ":" + socket.remotePort;
	socket.write("Welcome " + socket.name + "\n");

	socket.write(date.getFullYear() + "-" +
		("0" + (date.getMonth() + 1)).slice(-2) + "-" +
		("0" + date.getDate()).slice(-2) +
		" " + date.getHours() +
		":" + date.getMinutes() +"\n"
	);

	socket.end();
});

server.listen( Number(process.argv[2]) );
