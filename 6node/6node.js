var mymodule = require('./mymodule');

diretorio = process.argv[2];
extensao = process.argv[3];

// Como mymodule tem so' uma funcao, faz a chamada dele como
// se fosse uma funcao
mymodule(diretorio, extensao, callback);

function callback (error, data) {
	if (error)
		console.log ("Voces se meteram numa grande encrenca");

	else
	{
		data.forEach (function (element) {
			console.log(element);
		});
	}
};