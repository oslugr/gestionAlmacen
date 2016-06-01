$(document).ready(function() {
	var spreadsheetID = "1pYIMcjAyaYYM4Vpph-sBoArvy6WW1q8Z4qnDtB6Nq6s";
	var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

	$.getJSON("/data/articulos.json", function(data) {
		$.each(data, function(clave, valor) {
			var o = new Option(valor.tipo, valor.tipo);
			$(o).html(valor.tipo);
			$("#articulo").append(o);
		});
	});

	$.getJSON("/data/centros.json", function(data) {
		$.each(data, function(clave, valor) {
			var o = new Option(valor.nombre, valor.nombre);
			$(o).html(valor.nombre);
			$("#centro").append(o);
		});
	});

	$("#getId").click(function() {
		$.getJSON(url, function(data) {
			var entry = data.feed.entry;
			var centro = document.getElementById("centro").value;
			var articulo = document.getElementById("articulo").value;
			var codCentAux = getCodCentro(centro);
			var codArtAux = getCodArticulo(articulo);

			codCentAux.then(function(codCent) {
				codArtAux.then(function(codArt) {
					var aux = 0;

					$(entry).each(function() {
						if (this.gsx$centro.$t == centro) {
							aux++;
						}
					});

					aux++;
					aux = aux.toString();

					var id = "00000".substring(0, 5 - aux.length) + aux;
					codCent = "000000".substring(0, 6 - codCent.length) + codCent;
					var codigo = codCent + codArt + "00" + id;

					document.getElementById("codid").value = codigo;
				});
			});
		});
	});

	$("#generar").click(function() {
		$("#barcode").JsBarcode(document.getElementById("codid").value, {
			format: "CODE128",
			displayValue: true,
			fontSize: 20
		});
	});
});
