var fs = require('fs');
let buffer = fs.readFileSync('/home/aluno/Área de Trabalho/2node.js');
// let buffer = fs.readFileSync(process.argv[2]);
let n_of_linhas = buffer.toString().split('\n').length;
n_of_linhas -= 1;
console.log (n_of_linhas);
