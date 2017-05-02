var soma = 0;
for (var i = 0; i < process.argv.length; i++) {
  if (i >= 2)
  {
    soma += parseInt(process.argv[i]);
  }
}
console.log(soma);
