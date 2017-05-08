var fs = require ('fs');
var path = require('path');

var diretorio = process.argv[2];
var extensao = process.argv[3];

function callback (error, list) {
	if (error)
		console.log ("Voces se meteram numa grande encreca")
	else
	{
		list.forEach(function (element) {
			if (path.extname(element) === "." + extensao)
				console.log(element);
		});
	}
}

fs.readdir(diretorio, callback);