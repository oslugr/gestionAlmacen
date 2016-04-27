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
					var codigo = codArt + codCent + id;

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

	function getCodCentro(nombre) {
		var response = $.Deferred();

		$.ajax({
			url: "/data/centros.json",
			success: function(result) {
				var i;
				var centro = "";

				for (i = 0; i < result.length; i++) {
					if (nombre == result[i].nombre) {
						centro = result[i].codigo;
					}
				}

				if (centro === "") {
					centro = "999999";
				}

				response.resolve(centro);
			},
			error: function(xhr) {
				response.reject();
			}
		});

		return response.promise();
	}

	function getCodArticulo(nombre) {
		var response = $.Deferred();

		$.ajax({
			url: "/data/articulos.json",
			success: function(result) {
				var i;
				var articulo = "";

				for (i = 0; i < result.length; i++) {
					if (nombre == result[i].tipo) {
						articulo = result[i].codigo;
					}
				}

				if (articulo === "") {
					articulo = "99";
				}

				response.resolve(articulo);
			},
			error: function(xhr) {
				response.reject();
			}
		});

		return response.promise();
	}
});