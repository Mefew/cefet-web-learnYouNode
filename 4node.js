var fs = require('fs');

function callback (err, data)
{
  if (err) {
    console.error('There was an error', err);
    return;
  }

  let n_of_linhas = data.split('\n').length;
  n_of_linhas -= 1;
  console.log (n_of_linhas);
}

//callback neste caso e' um ponteiro para a funcao! Nao precisa dos parenteses!
fs.readFile(process.argv[2], 'utf8', callback );
