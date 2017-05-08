var fs = require('fs');
var path = require ('path');

exportList = [];

module.exports = function (diretorio, extensao, callback) {
	
	fs.readdir(diretorio, function (error, list){
		if (error)
			callback(error, null);

		else
		{
			for (var i = 0; i < list.length; i++) {
				if (path.extname(list[i]) === "."+extensao)
					exportList.push(list[i]);
			}

			callback (null, exportList);
		}
	});
}