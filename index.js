var stdin = process.openStdin();

stdin.addListener("data", function(d) {
  console.log("Código de barras leído: " + d.toString().trim());
});
