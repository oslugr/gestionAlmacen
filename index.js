var codigos = require('./lib/codigos');

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
  var code = d.toString().trim();

  console.log("Código de barras leído: " + code);

  var articulo = code.substring(0, 1);
  var centro = code.substring(2, 4);
  console.log("Tipo de artículo: " + codigos.getArticulo(articulo));
  console.log("Centro de origen: " + codigos.getCentro(centro));
});
